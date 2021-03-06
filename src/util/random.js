/** @module threeParticles */

/**
 * A Pseudo-random number generator.
 * Only meant to satisfy the requirements of particles without
 * external dependencies.
 * Borrowed from Blixt
 * https://gist.github.com/blixt/f17b47c62508be59987b
 * Which is in turn borrowed from Park-Miller PRNG.
 */
export class Random {

    /**
     * Constructs a new Random number generator.
     *
     * @param {number} [seed] The initial seed. Must be an integer.
     */
    constructor(seed = 16270110) {
        this._seed = Math.floor(seed) % 2147483647;
        if (this._seed == 0) this._seed = 1;
    }

    /**
     * @returns {number} Returns a pseudo-random value between 1 and 2^32 - 2.
     */
    next() {
        return this._seed = this._seed * 16807 % 2147483647;
    }

    /**
     * Returns a random number between `min` and `max` (exclusive).
     *
     * @param {number} [min] The minimum (inclusive) value.
     * @param {number} [max] The minimum (exclusive) value.
     * @returns {number} Returns a pseudo-random number in range [min, max).
     */
    nextFloat(min = 0, max = 1) {
        // We know that result of next() will be 1 to 2147483647 (exclusive).
        const r = (this.next() - 1) / 2147483646;
        return r * (max - min) + min;
    }

    /**
     * Returns a random floored number between `min` and `max` (exclusive).
     *
     * @param {number} [min] The minimum (inclusive) value.
     * @param {number} [max] The minimum (exclusive) value.
     * @returns {number} Returns a pseudo-random floored number in range
     * [min, max).
     */
    nextInt(min, max) {
        return Math.floor(this.nextFloat(min, max));
    }

    /**
     * @returns {boolean} Returns a pseudo-random boolean.
     */
    nextBoolean() {
        return this.nextFloat() >= 0.5;
    }

}

export const RNG = new Random();
