import chai from 'chai';
import {Group, Object3D} from 'three';
import {removeAllChildren} from '../../src/util/three-utils.js';

const assert = chai.assert;

describe('three-utils', () => {
  describe('removeAllChildren', () => {
    // defaults is only lightly tested; it comes straight out of lodash.
    it('Should remove all children', () => {
      const g = new Group();
      g.add(new Object3D());
      g.add(new Object3D());
      g.add(new Object3D());
      g.add(new Object3D());
      assert.equal(g.children.length, 4);
      removeAllChildren(g);
      assert.equal(g.children.length, 0);
    });
  });
});
