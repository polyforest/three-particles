import { RangeModel, rangeModelToJson, parseRange } from './RangeModel'
import cloneDeep from 'lodash/cloneDeep'
import type { PartialDeep } from 'type-fest'

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

export type TimelineModelJson = Omit<PartialDeep<TimelineModel>, 'timeline'> & {
    timeline?: Float32Array | number[]
}

/**
 * Returns a new TimelineModel with defaults applied.
 */
export function parseTimeline(timeline: TimelineModelJson): TimelineModel {
    const low = parseRange(timeline.low ?? cloneDeep(timelineDefaults.low))
    const high = parseRange(
        timeline.high ?? timeline.low ?? cloneDeep(timelineDefaults.high),
    )
    const tl: Float32Array = Array.isArray(timeline.timeline)
        ? new Float32Array(timeline.timeline)
        : timeline.timeline instanceof Float32Array
          ? timeline.timeline
          : new Float32Array()
    return {
        property: timeline.property ?? timelineDefaults.property,
        timeline: tl,
        useEmitterDuration:
            timeline.useEmitterDuration ?? timelineDefaults.useEmitterDuration,
        relative: timeline.relative ?? timelineDefaults.relative,
        low,
        high,
    }
}

/**
 * Returns a compact representation of a TimelineModel with default values removed.
 */
export function timelineModelToJson(
    timeline: TimelineModel,
): TimelineModelJson {
    const out: TimelineModelJson = {}

    if (timeline.property !== timelineDefaults.property)
        out.property = timeline.property

    if (timeline.timeline.length > 0)
        out.timeline = Array.from(timeline.timeline)

    if (timeline.useEmitterDuration)
        out.useEmitterDuration = timeline.useEmitterDuration

    if (timeline.relative) out.relative = timeline.relative

    const low = rangeModelToJson(timeline.low)
    if (Object.keys(low).length) out.low = low

    const high = rangeModelToJson(timeline.high)
    if (Object.keys(high).length) out.high = high

    return out
}
