import { ParticleEmitterState } from './ParticleEmitterState'
import { ParticleEffectModel } from '../model'

export class ParticleEffectState {
    public readonly emitters: ParticleEmitterState[]

    constructor(model: ParticleEffectModel) {
        this.emitters = model.emitters.map(
            (emitterModel) => new ParticleEmitterState(emitterModel),
        )
    }

    /**
     * Progresses all emitters.
     */
    update(dT: number): void {
        this.emitters.forEach((instance) => instance.update(dT))
    }

    /**
     * Rewinds all emitters.
     */
    rewind(): void {
        this.emitters.forEach((instance) => instance.rewind())
    }

    /**
     * Stops all emitters
     */
    stop(allowCompletion: boolean): void {
        this.emitters.forEach((instance) => instance.stop(allowCompletion))
    }

    /**
     * Resets all emitters.
     */
    reset(): void {
        this.emitters.forEach((instance) => instance.reset())
    }
}
