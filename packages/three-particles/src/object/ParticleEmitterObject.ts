import { ParticleEmitterState } from '../state'

export interface ParticleEmitterObject {
    readonly isParticleEmitterObject: true

    readonly state: ParticleEmitterState

    updateGeometry(): void
}

export function isParticleEmitterObject(
    object: any,
): object is ParticleEmitterObject {
    return object.isParticleEmitterObject
}
