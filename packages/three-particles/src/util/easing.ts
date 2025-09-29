/**
 * @file A collection of easing functions and their registry.
 */

import { clamp } from 'lodash'

/**
 * Function representing an interpolation, taking and returning a number in the
 * range [0, 1].
 */
export type EasingFun = (x: number) => number

const { cos, pow, sin, sqrt, PI } = Math

/**
 * Generates a parametric bounce easing with a given number of bounces and restitution (0..1)
 * - bounces: number of rebound arcs after the initial fall (0 means linear)
 * - restitution: velocity restitution per bounce (0..1). Height scales by restitution^2.
 */
export function makeBounce(bounces: number, restitution: number): EasingFun {
    // sanitize inputs
    const n = Math.max(0, Math.floor(bounces))
    const r = clamp(restitution, 0, 0.99) // avoid 1 to keep finite series

    if (n === 0) return (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x)

    // Segment durations follow a geometric progression so later bounces are quicker.
    // We have segments = 1 (initial fall) + n (each bounce arc)
    const segCount = n + 1
    const durations: number[] = new Array(segCount)
    for (let i = 0; i < segCount; i++) durations[i] = Math.pow(r, i)
    // Normalize to sum to 1
    const sum = durations.reduce((a, b) => a + b, 0)
    for (let i = 0; i < segCount; i++) durations[i] /= sum

    // cumulative times
    const tEnds: number[] = new Array(segCount)
    let acc = 0
    for (let i = 0; i < segCount; i++) {
        acc += durations[i]
        tEnds[i] = acc
    }

    return (x: number) => {
        if (x <= 0) return 0
        if (x >= 1) return 1

        // find segment index
        let idx = 0
        while (idx < segCount && x > tEnds[idx]) idx++
        const tStart = idx === 0 ? 0 : tEnds[idx - 1]
        const segLen = durations[idx]
        const u = (x - tStart) / segLen // local [0,1]

        if (idx === 0) {
            // initial fall: accelerate under gravity-like parabola
            return u * u
        }

        // bounce arc idx>=1: symmetric parabola touching 1 at both ends and reaching (1 - H) at the apex
        const height = Math.pow(r, 2 * idx) // diminishing maximum excursion below 1
        // y = 1 - H * 4u(1-u), which starts/ends at 1 and dips to 1-H at u=0.5
        return 1 - height * 4 * u * (1 - u)
    }
}

function easeOut(fn: EasingFun): EasingFun {
    return (x) => 1 - fn(1 - x)
}

function easeInOut(fn: EasingFun): EasingFun {
    return (x) =>
        x < 0.5
            ? 0.5 * fn(2 * x) // Scale input to [0, 1] and scale output to [0, 0.5]
            : 0.5 + 0.5 * (1 - fn(2 - 2 * x)) // Mirror the second half and adjust range to [0.5, 1]
}

/**
 *
 * @param x
 */
const elastic = (x: number) => {
    if (x === 0 || x === 1) return x
    return pow(2, -10 * x) * sin(((x - 0.075) * (2 * PI)) / 0.3) + 1
}

// Base easing functions
const baseEasings = {
    linear: (x) => x,
    quad: (x) => x * x,
    cubic: (x) => x * x * x,
    quart: (x) => x * x * x * x,
    quint: (x) => x * x * x * x * x,
    sine: (x) => 1 - cos(x * PI * 0.5),
    circ: (x) => 1 - sqrt(1 - x * x),
    back: (x) => 2.7 * x * x * x - 1.7 * x * x,
    elastic,
    // Default bounce: 3 bounces with restitution 0.5
    bounce: makeBounce(3, 0.5),
} as const satisfies Record<string, EasingFun>

export type EasingVariants<T extends Record<string, EasingFun>> = {
    [K in keyof T as K]: EasingFun
} & {
    [K in keyof T as K extends string ? `${K}In` : never]: EasingFun
} & {
    [K in keyof T as K extends string ? `${K}Out` : never]: EasingFun
} & {
    [K in keyof T as K extends string ? `${K}InOut` : never]: EasingFun
}

/**
 * Maps the base easings to their out/inout variants.
 */
export const easings: EasingVariants<typeof baseEasings> = Object.fromEntries(
    Object.entries(baseEasings).flatMap(([key, fn]) => [
        [key, fn],
        [`${key}In`, fn],
        [`${key}Out`, easeOut(fn)],
        [`${key}InOut`, easeInOut(fn)],
    ]),
) as EasingVariants<typeof baseEasings>

/**
 * Supported easing function identifiers.
 */
export type EaseType = keyof typeof easings

/**
 * Returns the easing function for the given string identifier.
 *
 * @param type The name of the easing function to retrieve.
 * @returns An `Easer` function.
 */
export function getEase(type: EaseType): EasingFun {
    if (!(type in easings)) throw new Error(`Easing '${type}' was not found.`)
    return easings[type]
}
