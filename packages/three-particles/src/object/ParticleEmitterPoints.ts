import {
    Float32BufferAttribute,
    Points,
    PointsMaterial,
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
 * ParticleEmitterPoints is a Points Object3D and renders ParticleEmitterState
 * as gl.POINTS.
 * This is the most basic Particle emitter object.
 */
export class ParticleEmitterPoints
    extends Points
    implements ParticleEmitterObject
{
    readonly isParticleEmitterObject = true
    /** The emitter's own state; null when rendering a sub-emitter pool. */
    private readonly state: ParticleEmitterState | null
    /** Set when this object renders every instance of a sub-emitter template. */
    private readonly pool: SubEmitterPool | null
    private readonly single: readonly ParticleEmitterState[]
    /** Set when the material is a particle ShaderMaterial. */
    private readonly shader: ParticleShaderSettings | null
    private shaderTime = 0

    /**
     * @param pool When given, renders all live instances of this sub-emitter
     * template in one draw (capacity: count × subEmitterMaxInstances)
     * instead of running the emitter itself.
     */
    constructor(model: ParticleEmitterModel, pool?: SubEmitterPool) {
        // Registry-resolved geometries are shared by every emitter that
        // references the same id, but this constructor writes per-emitter
        // position/color/rotation buffers and a drawRange into `this.geometry`.
        // Clone the shared instance so two emitters on one geometry id stay
        // independent; with no geometry given, Points allocates one that is
        // already emitter-owned.
        super(model.geometry?.clone() ?? undefined, model.material ?? undefined)
        this.pool = pool ?? null
        this.state = pool ? null : new ParticleEmitterState(model)
        this.single = this.state ? [this.state] : []
        const n = pool ? pool.capacity : model.count

        // Create a Float32BufferAttribute for position data:
        this.geometry.setAttribute(
            'position',
            new Float32BufferAttribute(new Float32Array(n * 3), 3),
        )

        this.geometry.setAttribute(
            'color',
            new Float32BufferAttribute(new Float32Array(n * 4), 4),
        )

        // Per-particle rotation (around Z axis, in radians).
        // This is used by a custom shader patch on PointsMaterial
        // to rotate the point sprite.
        this.geometry.setAttribute(
            'rotation',
            new Float32BufferAttribute(new Float32Array(n), 1),
        )

        this.configureMaterialForRotation()

        const material = firstMaterial(model.material)
        this.shader = getParticleShaderSettings(material)
        if (this.shader) {
            prepareParticleShaderMaterial(
                material as ShaderMaterial,
                this.shader,
            )
            // The shader contract's per-particle data (see particleShader.ts).
            // Standard PointsMaterial emitters don't pay for these buffers.
            const attr = (itemSize: number) =>
                new Float32BufferAttribute(
                    new Float32Array(n * itemSize),
                    itemSize,
                )
            this.geometry.setAttribute('particleColor', attr(4))
            this.geometry.setAttribute('particleAge', attr(1))
            this.geometry.setAttribute('particleLife', attr(1))
            this.geometry.setAttribute('particleSeed', attr(1))
            this.geometry.setAttribute('particleSize', attr(1))
            this.geometry.setAttribute('particleRotation', attr(1))
            this.onBeforeRender = (renderer, _scene, _camera, _geometry, mat) =>
                updateParticleShaderUniforms(
                    mat,
                    renderer,
                    this.shaderTime,
                    this.state?.alpha ?? this.pool!.alpha,
                )
        }

        // Particles may spread beyond the geometry's bounding sphere, which this
        // emitter never updates; default culling would hide live particles when
        // the origin sits offscreen. Mirrors ParticleEmitterInstancedMesh.
        this.frustumCulled = false

        // // Set a default bounding sphere (optional):
        // this.geometry.boundingSphere = new Sphere(new Vector3(0, 0, 0), 10)
    }

    /** Routes this emitter's sub-emitter triggers (root emitters only). */
    setSubEmitterSink(sink: SubEmitterSink | null): void {
        if (this.state && this.state.model.subEmitters.length > 0)
            this.state.subEmitterSink = sink
    }

    update(dT: number): void {
        // Progress internal particle simulation
        if (this.pool) this.pool.update(dT)
        else this.state!.update(dT)
        // Update geometry buffers from state
        const model = this.pool ? this.pool.template : this.state!.model
        if (!model.enabled) return
        if (this.shader) this.shaderTime += dT
        const posArr = this.geometry.attributes.position.array as Float32Array
        const colorArr = this.geometry.attributes.color.array as Float32Array
        const rotationArr = this.geometry.attributes.rotation
            .array as Float32Array

        const capacity = posArr.length / 3
        let i = 0
        const states = this.pool ? this.pool.activeStates : this.single
        outer: for (const state of states) {
            const offset = state.offset
            const mul = state.tintMultiplier
            for (const particle of state.particles) {
                if (!particle.active) continue
                if (i >= capacity) break outer
                const position = particle.position
                const j = i * 3
                posArr[j] = position.x + offset.x
                posArr[j + 1] = position.y + offset.y
                posArr[j + 2] = position.z + offset.z

                const tint = particle.tint
                const k = i * 4
                colorArr[k] = mul ? tint.r * mul.r : tint.r
                colorArr[k + 1] = mul ? tint.g * mul.g : tint.g
                colorArr[k + 2] = mul ? tint.b * mul.b : tint.b
                colorArr[k + 3] = mul ? tint.a * mul.a : tint.a

                // Use the particle's Z Euler rotation to rotate the point sprite.
                // rotationFinal includes orientation when enabled on the emitter.
                rotationArr[i] = particle.rotationFinal.z
                if (this.shader)
                    this.writeShaderAttributes(i, particle, colorArr)
                i++
            }
        }

        this.geometry.setDrawRange(0, i)
        this.geometry.attributes.position.needsUpdate = true
        this.geometry.attributes.color.needsUpdate = true
        this.geometry.attributes.rotation.needsUpdate = true
        if (this.shader) {
            const a = this.geometry.attributes
            a.particleColor.needsUpdate = true
            a.particleAge.needsUpdate = true
            a.particleLife.needsUpdate = true
            a.particleSeed.needsUpdate = true
            a.particleSize.needsUpdate = true
            a.particleRotation.needsUpdate = true
        }
    }

    private writeShaderAttributes(
        i: number,
        particle: ParticleEmitterState['particles'][number],
        tinted: Float32Array,
    ): void {
        const a = this.geometry.attributes
        const color = a.particleColor.array as Float32Array
        const k = i * 4
        // Same (possibly inherited-multiplied) tint as the color attribute.
        color[k] = tinted[k]
        color[k + 1] = tinted[k + 1]
        color[k + 2] = tinted[k + 2]
        color[k + 3] = tinted[k + 3]
        const expectancy = particle.lifeExpectancy
        ;(a.particleAge.array as Float32Array)[i] =
            expectancy > 0 ? Math.min(particle.life / expectancy, 1) : 0
        ;(a.particleLife.array as Float32Array)[i] = particle.life
        ;(a.particleSeed.array as Float32Array)[i] = particle.seed
        ;(a.particleSize.array as Float32Array)[i] =
            particle.scale.x * this.shader!.size
        ;(a.particleRotation.array as Float32Array)[i] =
            particle.rotationFinal.z
    }

    /**
     * Configure the material so that point sprites rotate using the per-particle
     * `rotation` attribute (Z Euler).
     */
    private configureMaterialForRotation(): void {
        const materials = Array.isArray(this.material)
            ? this.material
            : [this.material]

        for (const mat of materials) {
            if (!(mat instanceof PointsMaterial)) continue

            mat.onBeforeCompile = (shader) => {
                // Vertex shader: declare attribute + varying and pass rotation through.
                shader.vertexShader =
                    'attribute float rotation;\n' +
                    'varying float vRotation;\n' +
                    shader.vertexShader.replace(
                        '#include <color_vertex>',
                        '#include <color_vertex>\n    vRotation = rotation;\n',
                    )

                // Fragment shader: declare varying and rotate gl_PointCoord
                // around the center before sampling textures.
                //
                // NOTE: three.js' default PointsMaterial fragment shader uses
                // `#include <map_particle_fragment>` instead of an explicit
                // `vec2 uv = gl_PointCoord;` line. Because `onBeforeCompile`
                // receives the shader source *before* includes are expanded,
                // we must replace that include block rather than looking for
                // the generated lines.
                shader.fragmentShader =
                    'varying float vRotation;\n' +
                    shader.fragmentShader.replace(
                        '#include <map_particle_fragment>',
                        [
                            '#ifdef USE_MAP',
                            '    vec2 uv = gl_PointCoord;',
                            '    uv -= 0.5;',
                            '    float s = sin(vRotation);',
                            '    float c = cos(vRotation);',
                            '    mat2 rot = mat2(c, -s, s, c);',
                            '    uv = rot * uv;',
                            '    uv += 0.5;',
                            '    vec4 mapTexel = texture2D(map, uv);',
                            '    diffuseColor *= mapTexel;',
                            '#endif',
                        ].join('\n'),
                    )
            }
        }
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

    /** Releases this emitter's GPU buffers (its geometry is its own clone). */
    dispose(): void {
        this.geometry.dispose()
    }
}
