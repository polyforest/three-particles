import { Float32BufferAttribute, Points } from 'three'
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
    readonly state: ParticleEmitterState

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

        // // Set a default bounding sphere (optional):
        // this.geometry.boundingSphere = new Sphere(new Vector3(0, 0, 0), 10)
    }

    /**
     * Updates this emitter's buffer geometry.
     * Typically invoked by the particle effect that owns this emitter.
     */
    updateGeometry(): void {
        if (!this.state.model.enabled) return
        // Access the typed array for position data:
        const posArr = this.geometry.attributes.position.array as Float32Array
        const colorArr = this.geometry.attributes.color.array as Float32Array

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
            i++
        }

        this.geometry.setDrawRange(0, this.state.activeCount)
        this.geometry.attributes.position.needsUpdate = true
        this.geometry.attributes.color.needsUpdate = true
    }
}
