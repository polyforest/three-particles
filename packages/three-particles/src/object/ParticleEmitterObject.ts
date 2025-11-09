export interface ParticleEmitterObject {
    readonly isParticleEmitterObject: true

    update(dT: number): void
    rewind(): void
    stop(allowCompletion: boolean): void
    reset(): void
}

export function isParticleEmitterObject(
    object: any,
): object is ParticleEmitterObject {
    return object.isParticleEmitterObject
}
