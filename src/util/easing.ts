/**
 * @file A collection of easing functions and their registry.
 */

/**
 * Function representing an interpolation, taking and returning a number in the
 * range [0, 1].
 */
export type EasingFun = (x: number) => number

const { cos, pow, sin, sqrt, PI } = Math

const bounceOut: EasingFun = (x) => {
    const n1 = 7.5625
    const d1 = 2.75

    if (x < 1 / d1) {
        return n1 * x * x
    } else if (x < 2 / d1) {
        const v = x - 1.5
        return n1 * (v / d1) * v + 0.75
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375
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
    bounce: (x) => 1 - bounceOut(1 - x),
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
