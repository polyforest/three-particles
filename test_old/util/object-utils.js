import * as objectUtils from '../../src/util/object-utils.js';
import chai from 'chai';

const assert = chai.assert;

describe('object-utils', () => {
  describe('defaults', () => {
    // defaults is only lightly tested; it comes straight out of lodash.
    it('Should set first source with property', () => {
      const o = objectUtils.defaults({}, {id: 1}, {id: 2, arr: [0]});
      assert.equal(o.id, 1);
      assert.equal(o.arr.length, 1);
    });
    it(`Empty arrays on object should not be overridden.`, () => {
      const o = objectUtils.defaults({arr: []}, {arr: [0]});
      assert.equal(o.arr.length, 0);
    });
  });
});
