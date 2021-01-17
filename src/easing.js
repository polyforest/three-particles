/**
 * @fileoverview A collection of easing functions and their registry.
 */

/**
 * Function representing an interpolation.
 *
 * @typedef {function} Easer
 * @param {number} alpha A number with range 0-1.
 * @return {number} The alpha after easing.
 */

/**
 * @param {number} alpha
 * @return {number}
 */
function linear(alpha) {
  return alpha;
}

export const easing = {
  linear: linear,
};

/**
 * Returns the Easer for the given string identifier.
 * @param {EaseType} type
 * @return {Easer}
 */
export function getEase(type) {
  return easing[type];
}

/**
 * @typedef {"linear" | "pow2" | "pow2In" | "pow2Out"} EaseType
 */
