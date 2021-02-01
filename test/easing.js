import * as easing from '../src/easing.js';
import chai from 'chai';

const assert = chai.assert;

describe('easing', () => {
  it('getEase should return methods for all EaseType values', () => {
    const types = /** @type {easing.EaseType[]} */ ([
      'linear',
      'pow2In',
      'pow2Out',
      // TODO
    ]);
    types.forEach((type) => {
      assert.notStrictEqual(easing.getEase(type), null);
    });
  });
});

