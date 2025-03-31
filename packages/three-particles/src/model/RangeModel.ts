import * as easing from '../util/easing'
import { defaults } from 'lodash'

/**
 * Describes a number range with easing.
 */
export interface RangeModel {
    min: number
    max: number
    ease: easing.EaseType
}

/**
 * Default RangeModel values.
 */
export const rangeDefaults = {
    min: 0,
    max: 0,
    ease: 'linear',
} as const satisfies RangeModel

/**
 * Populates a `RangeModel` with defaults.
 * Mutates the passed-in `range`.
 */
export function sanitizeRange(range: any): asserts range is RangeModel {
    // If max is undefined, use range.min.
    defaults(range, { max: range.min ?? 0 }, rangeDefaults)
}

/**
 * Constructs an object implementing RangeModel.
 */
export function createRange(
    min: number,
    max: number = min,
    ease: easing.EaseType = 'linear',
): RangeModel {
    return { min, max, ease }
}

/**
 * Generates a random number within the given range, interpolated by its easing.
 */
export function valueFromRange(range: RangeModel): number {
    const fn = easing.getEase(range.ease)
    return fn(Math.random()) * (range.max - range.min) + range.min
}
