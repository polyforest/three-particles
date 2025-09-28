import { ParticleEmitterPoints } from './ParticleEmitterPoints'
import { Group } from 'three'
import {
    isParticleEmitterObject,
    ParticleEmitterObject,
} from './ParticleEmitterObject'
import { ParticleEffectModel } from '../model'

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
     * Constructs a new ParticleEffect from the given data.
     */
    constructor(readonly model: ParticleEffectModel) {
        super()
    }

    private forEachEmitter(cb: (emitter: ParticleEmitterObject) => void) {
        if (this.emittersNeedUpdate) {
            this.refreshEmitters()
        }

        for (const child of this.children) {
            if (isParticleEmitterObject(child)) {
                cb(child)
            }
        }
    }

    private refreshEmitters() {
        this.emittersNeedUpdate = false
        // TODO: smart recycle
        this.clear()

        for (const emitter of this.model.emitters) {
            const instance = new ParticleEmitterPoints(emitter)
            this.add(instance)
        }
    }

    /**
     * Progresses all emitters.
     */
    update(dT: number): void {
        this.forEachEmitter((instance) => {
            instance.state.update(dT)
            instance.updateGeometry()
        })
    }

    /**
     * Rewinds all emitters.
     */
    rewind(): void {
        this.forEachEmitter((instance) => instance.state.rewind())
    }

    /**
     * Stops all emitters
     */
    stop(allowCompletion: boolean): void {
        this.forEachEmitter((instance) => instance.state.stop(allowCompletion))
    }

    /**
     * Resets all emitters.
     */
    reset(): void {
        this.forEachEmitter((instance) => instance.state.reset())
    }

    clone(): this {
        return new ParticleEffect(this.model) as this
    }
}
