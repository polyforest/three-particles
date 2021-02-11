import {Object3D} from 'three';

/**
 * Removes all children from the given Object3D
 *
 * @param {Object3D} obj The parent object whose children will be removed.
 */
export function removeAllChildren(obj) {
  while (obj.children.length > 0) {
    obj.remove(obj.children[obj.children.length - 1]);
  }
}
