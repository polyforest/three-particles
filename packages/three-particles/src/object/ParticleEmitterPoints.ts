import { Float32BufferAttribute, Points, PointsMaterial } from 'three'
import { ParticleEmitterState } from '../state'
import { ParticleEmitterObject } from './ParticleEmitterObject'
import { ParticleEmitterModel } from '../model'

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
    private readonly state: ParticleEmitterState

    constructor(model: ParticleEmitterModel) {
        super(model.geometry ?? undefined, model.material ?? undefined)
        this.state = new ParticleEmitterState(model)
        const n = model.count

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

        // // Set a default bounding sphere (optional):
        // this.geometry.boundingSphere = new Sphere(new Vector3(0, 0, 0), 10)
    }

    update(dT: number): void {
        // Progress internal particle simulation
        this.state.update(dT)
        // Update geometry buffers from state
        if (!this.state.model.enabled) return
        const posArr = this.geometry.attributes.position.array as Float32Array
        const colorArr = this.geometry.attributes.color.array as Float32Array
        const rotationArr = this.geometry.attributes.rotation
            .array as Float32Array

        let i = 0
        for (const particle of this.state.particles) {
            if (!particle.active) continue
            const position = particle.position
            const j = i * 3
            posArr[j] = position.x
            posArr[j + 1] = position.y
            posArr[j + 2] = position.z

            const tint = particle.tint
            const k = i * 4
            colorArr[k] = tint.r
            colorArr[k + 1] = tint.g
            colorArr[k + 2] = tint.b
            colorArr[k + 3] = tint.a

            // Use the particle's Z Euler rotation to rotate the point sprite.
            // rotationFinal includes orientation when enabled on the emitter.
            rotationArr[i] = particle.rotationFinal.z
            i++
        }

        this.geometry.setDrawRange(0, this.state.activeCount)
        this.geometry.attributes.position.needsUpdate = true
        this.geometry.attributes.color.needsUpdate = true
        this.geometry.attributes.rotation.needsUpdate = true
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
        this.state.rewind()
    }

    stop(allowCompletion: boolean): void {
        this.state.stop(allowCompletion)
    }

    reset(): void {
        this.state.reset()
    }
}
