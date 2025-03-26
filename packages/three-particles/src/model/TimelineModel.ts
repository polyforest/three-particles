import { RangeModel, sanitizeRange } from './RangeModel'
import type { PartialDeep } from 'type-fest'
import { cloneDeep, defaults } from 'lodash'

/**
 * Describes a property timeline.
 */
export interface TimelineModel {
    /**
     * The name of the property this timeline controls.
     */
    property: string

    /**
     * A Float32Array of `[time, value0, value1, valueN, ... ]`
     */
    timeline: Float32Array

    /**
     * If true, relative to the particle's lifespan, if false, relative to the emitter duration.
     */
    useEmitterDuration: boolean

    /**
     * If true, the final value will not be the high value, but the high + low.
     */
    relative: boolean

    /**
     * When the values are initialized / reset for a new particle, this will be the low range.
     */
    low: RangeModel

    /**
     * When the values are initialized / reset for a new particle, this will be the high range.
     */
    high: RangeModel
}

/**
 * Default PropertyTimelineModel values.
 */
export const timelineDefaults = {
    property: '',
    timeline: new Float32Array(),
    useEmitterDuration: false,
    relative: false,
    low: {
        min: 0,
        max: 0,
        ease: 'linear',
    },
    high: {
        min: 1,
        max: 1,
        ease: 'linear',
    },
} as const satisfies TimelineModel

/**
 * Sets any defaults for unset properties on a timeline.
 * Mutates the passed-in `timeline`.
 */
export function sanitizeTimeline(
    timeline: PartialDeep<TimelineModel>,
): asserts timeline is TimelineModel {
    defaults(
        timeline,
        cloneDeep({ high: timeline.low ?? timelineDefaults.high }),
        cloneDeep<TimelineModel>(timelineDefaults),
    )
    sanitizeRange(timeline.low)
    sanitizeRange(timeline.high)
    if (Array.isArray(timeline.timeline)) {
        timeline.timeline = new Float32Array(timeline.timeline)
    }
}
