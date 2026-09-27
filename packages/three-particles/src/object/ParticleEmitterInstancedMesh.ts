import {
    Color,
    InstancedBufferAttribute,
    InstancedMesh,
    Object3D,
    ShaderMaterial,
} from 'three'
import { ParticleEmitterState } from '../state'
import { ParticleEmitterObject } from './ParticleEmitterObject'
import { ParticleEmitterModel } from '../model'
import {
    firstMaterial,
    getParticleShaderSettings,
    ParticleShaderSettings,
    prepareParticleShaderMaterial,
    updateParticleShaderUniforms,
} from './particleShader'

/**
 * ParticleEmitterInstancedMesh renders particles an instanced mesh
 * Supports transformations per instance.
 */
export class ParticleEmitterInstancedMesh
    extends InstancedMesh
    implements ParticleEmitterObject
{
    readonly isParticleEmitterObject = true as const
    private readonly state: ParticleEmitterState

    private readonly color = new Color()
    private readonly capacity: number
    private readonly obj = new Object3D()
    /** Set when the material is a particle ShaderMaterial. */
    private readonly shader: ParticleShaderSettings | null
    private shaderTime = 0

    constructor(model: ParticleEmitterModel) {
        const count = model.count
        const shader = getParticleShaderSettings(firstMaterial(model.material))
        // Shader emitters add per-instance attributes to the geometry, so a
        // registry geometry shared across emitters must be cloned first;
        // standard materials keep sharing it as before.
        const geometry = shader
            ? (model.geometry?.clone() ?? undefined)
            : (model.geometry ?? undefined)
        super(geometry, model.material ?? undefined, count)
        this.shader = shader

        this.capacity = count
        this.state = new ParticleEmitterState(model)

        // Enable shadows by default so lit materials work in demos.
        this.castShadow = true
        this.receiveShadow = true

        // Optionally, set frustumCulled false since particles may be spread.
        this.frustumCulled = false

        if (shader) {
            prepareParticleShaderMaterial(
                firstMaterial(model.material) as ShaderMaterial,
                shader,
            )
            // The shader contract's per-particle data (see particleShader.ts).
            const attr = (itemSize: number) =>
                new InstancedBufferAttribute(
                    new Float32Array(count * itemSize),
                    itemSize,
                )
            this.geometry.setAttribute('particleColor', attr(4))
            this.geometry.setAttribute('particleAge', attr(1))
            this.geometry.setAttribute('particleLife', attr(1))
            this.geometry.setAttribute('particleSeed', attr(1))
            this.onBeforeRender = (renderer, _scene, _camera, _geometry, mat) =>
                updateParticleShaderUniforms(
                    mat,
                    renderer,
                    this.shaderTime,
                    this.state.alpha,
                )
        }
    }

    update(dT: number): void {
        // progress simulation
        this.state.update(dT)
        if (!this.state.model.enabled) return
        if (this.shader) this.shaderTime += dT

        let index = 0

        for (const p of this.state.particles) {
            if (!p.active) continue

            // Position
            this.obj.position.copy(p.position)

            // Rotation
            this.obj.rotation.copy(p.rotationFinal)

            // Scale
            this.obj.scale.copy(p.scale)

            this.obj.updateMatrix()
            this.setMatrixAt(index, this.obj.matrix)

            // Instance color (RGB). Alpha is not supported per-instance on standard materials.
            this.color.setRGB(p.tint.r, p.tint.g, p.tint.b)
            this.setColorAt(index, this.color)

            if (this.shader) this.writeShaderAttributes(index, p)

            index++
            if (index >= this.capacity) break
        }

        // Update how many instances to draw
        this.count = index
        this.instanceMatrix.needsUpdate = true
        if (this.instanceColor) this.instanceColor.needsUpdate = true
        if (this.shader) {
            const a = this.geometry.attributes
            a.particleColor.needsUpdate = true
            a.particleAge.needsUpdate = true
            a.particleLife.needsUpdate = true
            a.particleSeed.needsUpdate = true
        }
    }

    private writeShaderAttributes(
        i: number,
        particle: ParticleEmitterState['particles'][number],
    ): void {
        const a = this.geometry.attributes
        const color = a.particleColor.array as Float32Array
        const k = i * 4
        color[k] = particle.tint.r
        color[k + 1] = particle.tint.g
        color[k + 2] = particle.tint.b
        color[k + 3] = particle.tint.a
        const expectancy = particle.lifeExpectancy
        ;(a.particleAge.array as Float32Array)[i] =
            expectancy > 0 ? Math.min(particle.life / expectancy, 1) : 0
        ;(a.particleLife.array as Float32Array)[i] = particle.life
        ;(a.particleSeed.array as Float32Array)[i] = particle.seed
    }

    rewind(): void {
        this.state.rewind()
    }

    stop(allowCompletion: boolean): void {
        this.state.stop(allowCompletion)
    }

    reset(): void {
        this.state.reset()
        this.shaderTime = 0
    }
}
