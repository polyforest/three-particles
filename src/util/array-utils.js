/**
 * @file Array utility methods.
 */

 /** @module */

/**
 * Removes an element from this array.
 *
 * @template T
 * @param {T[]} arr The Array to search for element.
 * @param {T} element The element to remove.
 * @returns {boolean} Returns true if the element was found.
 */
export function removeElement(arr, element) {
  const index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
    return true;
  } else {
    return false;
  }
};
