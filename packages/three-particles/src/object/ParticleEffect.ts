import { ParticleEmitterPoints } from './ParticleEmitterPoints'
import { Group } from 'three'
import {
    isParticleEmitterObject,
    ParticleEmitterObject,
} from './ParticleEmitterObject'

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
    private emitters: ParticleEmitterPoints[] = []

    /**
     * Constructs a new ParticleEffect from the given data.
     */
    constructor() {
        super()
    }

    private forEachEmitter(cb: (emitter: ParticleEmitterObject) => void) {
        for (const child of this.children) {
            if (isParticleEmitterObject(child)) {
                cb(child)
            }
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
        this.emitters.forEach((instance) =>
            instance.state.stop(allowCompletion),
        )
    }

    /**
     * Resets all emitters.
     */
    reset(): void {
        this.emitters.forEach((instance) => instance.state.reset())
    }

    clone(recursive: boolean = true): this {
        const effect = new ParticleEffect()
        if (recursive) {
            for (const child of this.children) {
                effect.add(child.clone(recursive))
            }
        }
        return effect as this
    }
}
