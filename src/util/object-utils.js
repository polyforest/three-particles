/**
 * @file Object utility methods.
 */

 /** @module threeParticles */

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 * Taken from lodash: https://github.com/lodash
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean}  Returns `true` if the values are equivalent, else
 * `false`.
 * @private
 */
export function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Used for built-in method references.
 *
 * @private
 */
const objectProto = Object.prototype;

/**
 * Used to check objects for own properties.
 *
 * @private
 */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 * Taken from lodash: https://github.com/lodash/lodash/blob/master/defaults.js
 *
 * Note: This method mutates `object`.
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
 * // => { 'a': 1, 'b': 2 }
 * @private
 */
export function defaults(object, ...sources) {
  object = Object(object);
  sources.forEach((source) => {
    if (source != null) {
      source = Object(source);
      // eslint-disable-next-line guard-for-in
      for (const key in source) {
        const value = object[key];
        if (value === undefined ||
            (eq(value, objectProto[key]) &&
            !hasOwnProperty.call(object, key))) {
          object[key] = source[key];
        }
      }
    }
  });
  return object;
}

/**
 * Performs a deep copy on the given object.
 * Only works with primitive data, does not work with instances such as Date,
 * function, Map, Set, Blob, etc.
 * 
 * @template T
 * @param {T} obj The object to clone.
 * @returns {T} A deep cloned copy of obj.
 */
export function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
