import * as easing from '../util/easing'
import { ReadonlyDeep } from 'type-fest'

/**
 * Describes a number range with easing.
 */
export interface RangeModel {
    min: number
    max: number
    ease: easing.EaseType
}

export type RangeModelJson = Partial<RangeModel>

/**
 * Default RangeModel values.
 */
export const rangeDefaults = {
    min: 0,
    max: 0,
    ease: 'linear',
} as const satisfies RangeModel

/**
 * Returns a new RangeModel with defaults applied.
 */
export function parseRange(
    rangeJson: ReadonlyDeep<RangeModelJson>,
): RangeModel {
    const min = rangeJson.min ?? rangeDefaults.min
    const max = rangeJson.max ?? rangeJson.min ?? rangeDefaults.max
    const ease = rangeJson.ease ?? rangeDefaults.ease
    return { min, max, ease }
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
