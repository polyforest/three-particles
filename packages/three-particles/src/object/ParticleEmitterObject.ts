import type { SubEmitterSink } from '../state'

export interface ParticleEmitterObject {
    readonly isParticleEmitterObject: true

    update(dT: number): void
    rewind(): void
    stop(allowCompletion: boolean): void
    reset(): void
    /** Routes the emitter's sub-emitter triggers. */
    setSubEmitterSink(sink: SubEmitterSink | null): void
    dispose(): void
}

export function isParticleEmitterObject(
    object: any,
): object is ParticleEmitterObject {
    return object.isParticleEmitterObject
}
