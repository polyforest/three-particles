/**
 * Generates a unique id string.
 *
 * @returns {string} The new id.
 */
export function createUid() {
  return Date.now().toString(36) +
  (Math.random() * 2147483647).toString(36);
}

/**
 * Generates a short unique id string.
 *
 * @returns {string} The new id.
 */
export function createShortUid() {
  return Date.now().toString(36).substr(-4) +
  (Math.random() * 65536).toString(36);
}
