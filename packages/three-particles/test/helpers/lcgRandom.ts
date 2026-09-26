/**
 * Seeds Math.random with a deterministic LCG for test reproducibility.
 *
 * This module must be imported BEFORE any src import in a test file:
 * Zone.ts destructures `random` from `Math` at module-load time, so the seed
 * has to be in place before that module initializes. Jest runs test files in
 * isolated module registries, so the seed resets per file.
 *
 * Tests that pin exact draw-dependent values call seedRandom() at their start
 * so they stay independent of how many draws earlier tests consumed.
 */
let seed = 42

export function seedRandom(nextSeed = 42): void {
    seed = nextSeed
}

Math.random = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
}
