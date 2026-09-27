import {
    Color,
    InstancedBufferAttribute,
    InstancedMesh,
    Object3D,
    ShaderMaterial,
} from 'three'
import { ParticleEmitterState, SubEmitterSink } from '../state'
import type { SubEmitterPool } from './SubEmitterSystem'
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
    /** The emitter's own state; null when rendering a sub-emitter pool. */
    private readonly state: ParticleEmitterState | null
    /** Set when this object renders every instance of a sub-emitter template. */
    private readonly pool: SubEmitterPool | null
    private readonly single: readonly ParticleEmitterState[]

    private readonly color = new Color()
    private readonly capacity: number
    private readonly obj = new Object3D()
    /** Set when the material is a particle ShaderMaterial. */
    private readonly shader: ParticleShaderSettings | null
    private shaderTime = 0

    /**
     * @param pool When given, renders all live instances of this sub-emitter
     * template in one draw (capacity: count × subEmitterMaxInstances)
     * instead of running the emitter itself.
     */
    constructor(model: ParticleEmitterModel, pool?: SubEmitterPool) {
        const count = pool ? pool.capacity : model.count
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
        this.pool = pool ?? null
        this.state = pool ? null : new ParticleEmitterState(model)
        this.single = this.state ? [this.state] : []

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
                    this.state?.alpha ?? this.pool!.alpha,
                )
        }
    }

    /** Routes this emitter's sub-emitter triggers (root emitters only). */
    setSubEmitterSink(sink: SubEmitterSink | null): void {
        if (this.state && this.state.model.subEmitters.length > 0)
            this.state.subEmitterSink = sink
    }

    update(dT: number): void {
        // progress simulation
        if (this.pool) this.pool.update(dT)
        else this.state!.update(dT)
        const model = this.pool ? this.pool.template : this.state!.model
        if (!model.enabled) return
        if (this.shader) this.shaderTime += dT

        let index = 0
        const states = this.pool ? this.pool.activeStates : this.single
        outer: for (const state of states) {
            const offset = state.offset
            const mul = state.tintMultiplier
            for (const p of state.particles) {
                if (!p.active) continue
                if (index >= this.capacity) break outer

                // Position
                this.obj.position.copy(p.position).add(offset)

                // Rotation
                this.obj.rotation.copy(p.rotationFinal)

                // Scale
                this.obj.scale.copy(p.scale)

                this.obj.updateMatrix()
                this.setMatrixAt(index, this.obj.matrix)

                // Instance color (RGB). Alpha is not supported per-instance on standard materials.
                if (mul) {
                    this.color.setRGB(
                        p.tint.r * mul.r,
                        p.tint.g * mul.g,
                        p.tint.b * mul.b,
                    )
                } else {
                    this.color.setRGB(p.tint.r, p.tint.g, p.tint.b)
                }
                this.setColorAt(index, this.color)

                if (this.shader) this.writeShaderAttributes(index, p, mul)

                index++
            }
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
        mul: ParticleEmitterState['tintMultiplier'],
    ): void {
        const a = this.geometry.attributes
        const color = a.particleColor.array as Float32Array
        const k = i * 4
        const t = particle.tint
        color[k] = mul ? t.r * mul.r : t.r
        color[k + 1] = mul ? t.g * mul.g : t.g
        color[k + 2] = mul ? t.b * mul.b : t.b
        color[k + 3] = mul ? t.a * mul.a : t.a
        const expectancy = particle.lifeExpectancy
        ;(a.particleAge.array as Float32Array)[i] =
            expectancy > 0 ? Math.min(particle.life / expectancy, 1) : 0
        ;(a.particleLife.array as Float32Array)[i] = particle.life
        ;(a.particleSeed.array as Float32Array)[i] = particle.seed
    }

    rewind(): void {
        // Pool instances are spawned by their parents, not rewound.
        this.state?.rewind()
    }

    stop(allowCompletion: boolean): void {
        if (this.state) this.state.stop(allowCompletion)
        else if (!allowCompletion) this.pool!.reset()
    }

    reset(): void {
        if (this.state) this.state.reset()
        else this.pool!.reset()
        this.shaderTime = 0
    }
}
