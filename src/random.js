/**
 * A Pseudo-random number generator.
 */
export class Random {

    /**
     * Constructs a new Random number generator.
     * @param {number} seed
     */
    constructor(seed = 16270110) {
        this._seed = seed % 2147483647;
    }

    /**
     * @return {number} Returns a pseudo-random value between 1 and 2^32 - 2.
     */
    next() {
        return this._seed = this._seed * 16807 % 2147483647;
    }

    /**
     * Returns a random number between `min` and `max` (exclusive).
     * @param {number} min The minimum (inclusive) value.
     * @param {number} max The minimum (exclusive) value.
     * @return {number} Returns a pseudo-random number in range [min, max).
     */
    nextFloat(min = 0, max = 1) {
        // We know that result of next() will be 1 to 2147483647 (exclusive).
        const r = (this.next() - 1) / 2147483646;
        return r * (max - min) + min;
    }

    /**
     * Returns a random floored number between `min` and `max` (exclusive).
     * @param {number} min The minimum (inclusive) value.
     * @param {number} max The minimum (exclusive) value.
     * @return {number} Returns a pseudo-random floored number in range
     * [min, max).
     */
    nextInt(min, max) {
        return Math.floor(this.nextFloat(min, max));
    }

    /**
     * @return {boolean} Returns a pseudo-random boolean.
     */
    nextBoolean() {
        return this.nextFloat() >= 0.5;
    }
}

export const RNG = new Random();
