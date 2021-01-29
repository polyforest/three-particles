/**
 * @file Object utility methods.
 */

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
 */
export function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 * Taken from lodash: https://github.com/lodash/lodash/blob/master/defaults.js
 *
 * **Note:** This method mutates `object`.
 *
 * @since 0.1.0
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see defaultsDeep
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
 * // => { 'a': 1, 'b': 2 }
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
