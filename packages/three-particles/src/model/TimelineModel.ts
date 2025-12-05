import { parseRange, RangeModel, RangeModelJson } from './RangeModel'
import cloneDeep from 'lodash/cloneDeep'
import { ReadonlyDeep } from 'type-fest'

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
    timeline: [],
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
} as const satisfies TimelineModelJson

export type TimelineModelJson = Omit<
    Partial<TimelineModel>,
    'timeline' | 'low' | 'high'
> & {
    property?: string
    timeline?: number[]
    low?: RangeModelJson
    high?: RangeModelJson
}

/**
 * Returns a new TimelineModel with defaults applied.
 */
export function parseTimeline(
    timeline: ReadonlyDeep<TimelineModelJson>,
): TimelineModel {
    const low = parseRange(timeline.low ?? cloneDeep(timelineDefaults.low))
    const high = parseRange(
        timeline.high ?? timeline.low ?? cloneDeep(timelineDefaults.high),
    )
    return {
        property: timeline.property ?? '',
        timeline: new Float32Array(timeline.timeline ?? []),
        useEmitterDuration:
            timeline.useEmitterDuration ?? timelineDefaults.useEmitterDuration,
        relative: timeline.relative ?? timelineDefaults.relative,
        low,
        high,
    }
}
