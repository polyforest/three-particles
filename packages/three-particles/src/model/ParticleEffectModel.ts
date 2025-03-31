/**
 * @file Data descriptors for a particle effect (TypeScript version).
 */

import { cloneDeep, defaults } from 'lodash'
import { isNonNil } from '../util/object'
import { RangeModel } from './RangeModel'
import { ParticleEmitterModel, sanitizeEmitter } from './ParticleEmitterModel'
import { PartialDeep } from 'type-fest'
import { Material } from 'three'

/**
 * A model describing the duration and delay padding for an emitter.
 */
export interface EmitterDurationModel {
    /**
     * The number of seconds this emitter will create particles.
     */
    duration: RangeModel

    /**
     * The time, in seconds, before the emitter begins.
     */
    delayBefore: RangeModel

    /**
     * The time, in seconds, after completion before restarting.
     */
    delayAfter: RangeModel
}

/**
 * Parameters for creating a new particle effect.
 */
export interface ParticleEffectModel {
    version: string
    emitters: ParticleEmitterModel[]
}

/**
 * Default ParticleEffectModel values.
 */
export const particleEffectDefaults = {
    version: '1.0',
    emitters: [],
} as const satisfies ParticleEffectModel

/**
 * Sets defaults on the particle effect data object.
 * Mutates the passed-in `effect`.
 */
export function sanitizeParticleEffect(
    effect: PartialDeep<ParticleEffectModel>,
    materials: Record<string, Material>,
): asserts effect is ParticleEffectModel {
    defaults(effect, cloneDeep(particleEffectDefaults))
    effect.emitters
        .filter(isNonNil)
        .forEach((emitter) => sanitizeEmitter(emitter, materials))
}
