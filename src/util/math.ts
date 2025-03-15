export const HALF_PI = Math.PI * 0.5

/**
 * Returns true if `x` is within `tolerance` of `y`.
 *
 * @param x
 * @param y
 * @param tolerance
 */
export function closeTo(
    x: number,
    y: number,
    tolerance = Number.EPSILON,
): boolean {
    return Math.abs(x - y) <= tolerance
}
