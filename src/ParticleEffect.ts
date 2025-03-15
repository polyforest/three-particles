import { ParticleEmitter } from './ParticleEmitter'
import { Group, Vector3 } from 'three'
import type { ParticleEffectModel } from './model'
import { ParticleEffectState } from './state'

/**
 * A Particle effect. This is a group of particle emitters with properties
 * and methods to update all emitters.
 */
export class ParticleEffect extends Group {
    /**
     * Set to true if the emitter list changes. Next update or next
     * `updateEmitters` call the emitter list will be synchronized
     * to the data model.
     */
    public emittersNeedUpdate: boolean = true

    /**
     * The active list of particle emitters belonging to this effect.
     */
    private emitters: ParticleEmitter[] = []

    private readonly state: ParticleEffectState

    /**
     * Constructs a new ParticleEffect from the given data.
     *
     * @param model - The data used to construct this particle effect.
     */
    constructor(
        /**
         * The model data for the particle effect.
         * This may be mutated, but if the emitters list changes, then
         * `emittersNeedUpdate` will need to be set to true.
         */
        private readonly model: ParticleEffectModel,
    ) {
        super()

        this.state = new ParticleEffectState(model)
    }

    /**
     * Updates the emitter objects to match the data model.
     */
    private updateEmitters(): void {
        this.emittersNeedUpdate = false

        this.clearEmitters()

        // Recreate emitters from the data model
        this.emitters = this.state.emitters.map((emitterState) => {
            const emitter = new ParticleEmitter(emitterState)
            this.add(emitter)
            return emitter
        })
    }

    /**
     * Updates all emitters forward in time.
     * @param dT - The number of seconds to progress.
     */
    public update(dT: number): void {
        if (this.emittersNeedUpdate) this.updateEmitters()

        this.state.update(dT)
        for (const emitter of this.emitters) {
            emitter.update()
        }
    }

    private clearEmitters() {
        this.clear()
        for (const emitter of this.emitters) {
            emitter.dispose()
        }
        this.emitters.length = 0
    }

    dispose() {
        this.clearEmitters()
    }
}
