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
     * How the timeline's tracked value reaches the property each frame:
     * - `'set'` (default): the property receives this timeline's tracked value.
     * - `'add'`: the property receives the SET timeline's value (if any) plus the
     *   SUM of every additive timeline's tracked value at time t. Each additive
     *   timeline tracks its own curve — it contributes the interpolated value at
     *   t, never its integral. Only valid for the velocity and heading-rate
     *   properties (`additiveCapableProperties`).
     */
    mode: TimelineMode

    /**
     * If true, this timeline is sampled exactly once, when the particle spawns
     * (in `ParticleState.reset()`), instead of every frame: the property starts
     * from this timeline's value at particle-time 0 and then evolves freely —
     * e.g. a spawn heading that keeps integrating under `orientationVel` curl.
     * Default: `false` (applied every frame, as before).
     */
    applyAtSpawn?: boolean

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
 * How a timeline's value reaches its property — see `TimelineModel.mode`.
 */
export type TimelineMode = 'add' | 'set'

/**
 * The timeline properties that accept `mode: "add"`: velocity and heading-rate
 * channels, the properties the legacy engine summed across timeline instances.
 * Kept in sync with `particlePropertyUpdaters` by test.
 */
export const additiveCapableProperties: readonly string[] = [
    'xVel',
    'yVel',
    'zVel',
    'orientationXVel',
    'orientationYVel',
    'orientationZVel',
]

/**
 * Default PropertyTimelineModel values.
 */
export const timelineDefaults = {
    property: '',
    timeline: [],
    useEmitterDuration: false,
    relative: false,
    mode: 'set',
    applyAtSpawn: false,
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
 * `mode` must be a known mode, and additive mode is only expressible for the
 * velocity and heading-rate properties. Rejecting anything else at parse keeps
 * an unsupported `mode: "add"` from silently acting as a SET — the flattened-curl
 * failure mode with no error.
 */
function validateTimelineMode(property: string, mode: string): void {
    if (mode !== 'add' && mode !== 'set') {
        throw new Error(
            `Invalid timeline for property '${property}': unknown mode '${mode}', expected 'add' or 'set'.`,
        )
    }
    if (mode === 'add' && !additiveCapableProperties.includes(property)) {
        throw new Error(
            `Invalid timeline for property '${property}': mode 'add' is only supported for the velocity and heading-rate properties (${additiveCapableProperties.join(', ')}).`,
        )
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
    const mode = timeline.mode ?? timelineDefaults.mode
    validateTimelineMode(property, mode)
    const entries = timeline.timeline ?? []
    validateTimelineEntries(property, entries)
    return {
        property,
        timeline: new Float32Array(entries),
        useEmitterDuration:
            timeline.useEmitterDuration ?? timelineDefaults.useEmitterDuration,
        relative: timeline.relative ?? timelineDefaults.relative,
        mode,
        applyAtSpawn: timeline.applyAtSpawn ?? timelineDefaults.applyAtSpawn,
        low,
        high,
    }
}
