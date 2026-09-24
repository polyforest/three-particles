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
 * Timeline JSON is a flat keyframe array: `[time, value, ...]` pairs for float
 * properties, `[time, r, g, b, ...]` for `color`. Consumers
 * (`getTimelineValue`/`getTimelineValues`) assume that stride and sorted
 * keyframes; accepting incomplete or unsorted input here surfaces later as NaN
 * values or mis-clamped interpolation, far from the malformed JSON.
 */
function validateTimelineEntries(
    property: string,
    entries: readonly number[],
): void {
    // Color timelines carry r/g/b per keyframe (ColorPropertyState, stride 4);
    // every other property is a single value per keyframe (stride 2).
    const stride = property === 'color' ? 4 : 2
    if (entries.length % stride !== 0) {
        throw new Error(
            `Invalid timeline for property '${property}': expected a multiple of ${stride} entries (time/value keyframes), got ${entries.length}; the entry at index ${entries.length - 1} has no complete keyframe.`,
        )
    }
    for (let i = stride; i < entries.length; i += stride) {
        if (entries[i] <= entries[i - stride]) {
            throw new Error(
                `Invalid timeline for property '${property}': times must be strictly increasing, but the time at index ${i} (${entries[i]}) is not greater than the time at index ${i - stride} (${entries[i - stride]}).`,
            )
        }
    }
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
    const property = timeline.property ?? ''
    const entries = timeline.timeline ?? []
    validateTimelineEntries(property, entries)
    return {
        property,
        timeline: new Float32Array(entries),
        useEmitterDuration:
            timeline.useEmitterDuration ?? timelineDefaults.useEmitterDuration,
        relative: timeline.relative ?? timelineDefaults.relative,
        low,
        high,
    }
}
