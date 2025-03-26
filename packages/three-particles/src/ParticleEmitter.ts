import {
    AdditiveBlending,
    BufferGeometry,
    Float32BufferAttribute,
    Material,
    Points,
    PointsMaterial,
} from 'three'
import { getDefaultRadial } from './materialDefaults'
import { ParticleEmitterState } from './state'

/**
 * A ParticleEmitter contains one [Points] object and is responsible for
 * updating its particles.
 */
export class ParticleEmitter extends Points<BufferGeometry, Material> {
    constructor(private readonly state: ParticleEmitterState) {
        super()

        const n = state.count

        // Create a new geometry and populate it with vertices:
        this.geometry = new BufferGeometry()

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

        // Assign the material from your data model:
        // this.material = data.material

        // TEMP
        this.scale.set(0.1, -0.1, 0.1)

        this.material = new PointsMaterial({
            size: 5,
            sizeAttenuation: true,
            transparent: true,
            map: getDefaultRadial(),
            blending: AdditiveBlending,
            alphaTest: 0.01,
            depthWrite: false,
            vertexColors: true,
        })
    }

    /**
     * Updates this emitter forward in time by `dT` seconds.
     * Typically invoked by the particle effect that owns this emitter.
     */
    update(): void {
        // Access the typed array for position data:
        const posArr = this.geometry.attributes.position.array as Float32Array
        const colorArr = this.geometry.attributes.color.array as Float32Array

        const n = this.state.activeCount

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

        this.geometry.setDrawRange(0, n)
        this.geometry.attributes.position.needsUpdate = true
        this.geometry.attributes.color.needsUpdate = true
    }

    dispose() {
        this.geometry.dispose()
        this.material.dispose()
    }
}
