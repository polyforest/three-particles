import { Color, InstancedMesh, Object3D, PlaneGeometry } from 'three'
import { ParticleEmitterState } from '../state'
import { ParticleEmitterObject } from './ParticleEmitterObject'
import { ParticleEmitterModel } from '../model'

/**
 * ParticleEmitterInstancedMesh renders particles an instanced mesh
 * Supports transformations per instance.
 */
export class ParticleEmitterInstancedMesh
    extends InstancedMesh
    implements ParticleEmitterObject
{
    readonly isParticleEmitterObject = true as const
    readonly state: ParticleEmitterState

    private readonly color = new Color()
    private readonly capacity: number
    private readonly obj = new Object3D()

    constructor(model: ParticleEmitterModel) {
        const count = model.count
        // Use a simple unit plane. User-provided material is applied below.
        super(new PlaneGeometry(1, 1), model.material ?? undefined, count)

        this.capacity = count
        this.state = new ParticleEmitterState(model)

        // Optionally, set frustumCulled false since particles may be spread.
        this.frustumCulled = false
    }

    updateGeometry(): void {
        if (!this.state.model.enabled) return

        let index = 0

        for (const p of this.state.particles) {
            if (!p.active) continue

            // Position
            this.obj.position.copy(p.position)

            this.obj.scale.copy(p.scale)

            this.obj.updateMatrix()
            this.setMatrixAt(index, this.obj.matrix)

            // Instance color (RGB). Alpha is not supported per-instance on standard materials.
            this.color.setRGB(p.tint.r, p.tint.g, p.tint.b)
            this.setColorAt(index, this.color)

            index++
            if (index >= this.capacity) break
        }

        // Update how many instances to draw
        this.count = index
        this.instanceMatrix.needsUpdate = true
        if (this.instanceColor) this.instanceColor.needsUpdate = true
    }
}
