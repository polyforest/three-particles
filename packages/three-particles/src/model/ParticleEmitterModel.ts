import { EmitterDurationModel } from './ParticleEffectModel'
import { MathUtils } from 'three'
import {
    sanitizeTimeline,
    timelineDefaults,
    TimelineModel,
} from './TimelineModel'
import { rangeDefaults, sanitizeRange } from './RangeModel'
import type { PartialDeep } from 'type-fest'
import { cloneDeep, defaults } from 'lodash'
import { isNonNil } from '../util/object'
import { sanitizeZone, Zone, zoneDefaults } from './Zone'

/**
 * Data for a particle emitter.
 */
export interface ParticleEmitterModel {
    id: string

    /**
     * True if the emitter should be used.
     */
    enabled: boolean

    /**
     * If false, this emitter will not loop after the total duration.
     */
    loops: boolean

    /**
     * Represents when and how long this emitter will be active.
     */
    duration: EmitterDurationModel

    /**
     * The maximum number of particles to create.
     */
    count: number

    /**
     * The rate of emissions, in particles per second.
     */
    emissionRate: TimelineModel

    /**
     * Calculates the life of a newly created particle.
     */
    particleLifeExpectancy: TimelineModel

    /**
     * The spawn location.
     */
    spawn: Zone

    /**
     * If true, the forward direction affects the rotation.
     */
    orientToForwardDirection: boolean

    /**
     * Timelines relative to the particle life.
     */
    propertyTimelines: TimelineModel[]

    /**
     * The name of the material to use for this emitter.
     */
    material: string | null
}

/**
 * Default ParticleEmitterModel values.
 */
export const particleEmitterDefaults = {
    id: '',
    enabled: true,
    count: 100,
    loops: true,
    duration: {
        duration: {
            min: 10,
            max: 10,
            ease: 'linear',
        },
        delayBefore: rangeDefaults,
        delayAfter: rangeDefaults,
    },
    emissionRate: {
        ...timelineDefaults,
        property: 'emissionRate',
        useEmitterDuration: true,
        low: {
            min: 10,
            max: 10,
            ease: 'linear',
        },
        high: {
            min: 10,
            max: 10,
            ease: 'linear',
        },
    },
    particleLifeExpectancy: {
        ...timelineDefaults,
        property: 'particleLifeExpectancy',
        useEmitterDuration: true,
        low: {
            min: 2,
            max: 2,
            ease: 'linear',
        },
        high: {
            min: 2,
            max: 2,
            ease: 'linear',
        },
    },
    spawn: zoneDefaults,
    orientToForwardDirection: false,
    propertyTimelines: [],
    material: null,
} as const satisfies ParticleEmitterModel

/**
 * Sets any defaults for unset properties on an emitter.
 * Mutates the passed-in `emitter`.
 */
export function sanitizeEmitter(
    emitter: PartialDeep<ParticleEmitterModel>,
): asserts emitter is ParticleEmitterModel {
    defaults(
        emitter,
        { id: MathUtils.generateUUID() },
        cloneDeep(particleEmitterDefaults),
    )
    sanitizeZone(emitter.spawn)
    sanitizeEmitterDuration(emitter.duration)
    sanitizeTimeline(emitter.emissionRate)
    sanitizeTimeline(emitter.particleLifeExpectancy)
    emitter.propertyTimelines.filter(isNonNil).forEach(sanitizeTimeline)
}

export function sanitizeEmitterDuration(
    duration: PartialDeep<EmitterDurationModel>,
): asserts duration is EmitterDurationModel {
    defaults(duration, cloneDeep(particleEmitterDefaults.duration))
    sanitizeRange(duration.duration)
    sanitizeRange(duration.delayBefore)
    sanitizeRange(duration.delayAfter)
}
