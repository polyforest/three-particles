/**
 * @file A collection of easing functions and their registry.
 */

/** @module threeParticles */

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

/**
 * @param {number} alpha A number with range 0-1.
 * @returns {number} Returns alpha.
 */
function pow2In(alpha) {
  return alpha * alpha;
}

/**
 * @param {number} alpha A number with range 0-1.
 * @returns {number} Returns alpha.
 */
function pow2Out(alpha) {
  return 1 - (1 - alpha) * (1 - alpha);
}

export const easingsRegistry = {
  linear,
  pow2In,
  pow2Out,
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
