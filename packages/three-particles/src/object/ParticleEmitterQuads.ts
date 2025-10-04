import {
    Color,
    InstancedMesh,
    Object3D,
    PlaneGeometry,
    Quaternion,
    Vector3,
} from 'three'
import { ParticleEmitterState } from '../state'
import { ParticleEmitterObject } from './ParticleEmitterObject'
import { ParticleEmitterModel } from '../model'

const VEC_Z = new Vector3(0, 0, 1)

/**
 * ParticleEmitterQuads renders particles as camera-facing quads (via instancing).
 * Supports non-uniform scale (scaleX/scaleY) and rotation around Z.
 */
export class ParticleEmitterQuads
    extends InstancedMesh
    implements ParticleEmitterObject
{
    readonly isParticleEmitterObject = true as const
    readonly state: ParticleEmitterState

    private readonly _capacity: number
    private readonly _dummy = new Object3D()
    private readonly _quat = new Quaternion()

    constructor(model: ParticleEmitterModel) {
        const count = model.count
        // Use a simple unit plane. User-provided material is applied below.
        super(new PlaneGeometry(1, 1), model.material ?? undefined, count)

        this._capacity = count
        this.state = new ParticleEmitterState(model)

        // Optionally, set frustumCulled false since particles may be spread.
        this.frustumCulled = false
    }

    updateGeometry(): void {
        if (!this.state.model.enabled) return

        const color = new Color()
        let index = 0

        for (const p of this.state.particles) {
            if (!p.active) continue

            // Position
            this._dummy.position.copy(p.position)

            // Rotation around Z (screen-space style). We'll rotate quad around local Z.
            this._quat.setFromAxisAngle(VEC_Z, p.rotationFinal.z)
            this._dummy.quaternion.copy(this._quat)

            this._dummy.scale.copy(p.scale)

            this._dummy.updateMatrix()
            this.setMatrixAt(index, this._dummy.matrix)

            // Instance color (RGB). Alpha is not supported per-instance on standard materials.
            color.setRGB(p.tint.r, p.tint.g, p.tint.b)
            this.setColorAt(index, color)

            index++
            if (index >= this._capacity) break
        }

        // Update how many instances to draw
        this.count = index
        this.instanceMatrix.needsUpdate = true
        if (this.instanceColor) this.instanceColor.needsUpdate = true
    }
}
