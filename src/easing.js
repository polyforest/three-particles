/**
 * @file A collection of easing functions and their registry.
 */

 /** @module */

/**
 * Function representing an interpolation.
 *
 * @typedef {Function} Easer
 * @param {number} alpha A number with range 0-1.
 * @returns {number} The alpha after easing.
 */

/**
 * @param {number} alpha A number with range 0-1.
 * @returns {number} Returns alpha.
 */
function linear(alpha) {
  return alpha;
}

export const easingsRegistry = {
  linear: linear,
};

/**
 * Returns the `Easer` for the given string identifier.
 *
 * @param {EaseType} type The name of the easing function to return.
 * @returns {Easer} Returns the `Easer` function.
 */
export function getEase(type) {
  return easingsRegistry[type];
}

/**
 * @typedef {"linear" | "pow2" | "pow2In" | "pow2Out"} EaseType
 */
