import {
    getTimelineValue,
    getTimelineValues,
    getIndexClosestToTime,
    getIndexCloseToTime,
} from '../../src/util/interpolation'

describe('util/interpolation', () => {
    describe('getTimelineValue', () => {
        it('returns exact values at key times and interpolates linearly', () => {
            const tl = new Float32Array([0, 0, 1, 10])
            expect(getTimelineValue(tl, 0)).toBe(0)
            expect(getTimelineValue(tl, 1)).toBe(10)
            expect(getTimelineValue(tl, 0.5)).toBeCloseTo(5)
        })
    })

    describe('getTimelineValues', () => {
        it('fills zeros when timeline is empty', () => {
            const tl = new Float32Array([])
            const out = new Float32Array(3)
            getTimelineValues(tl, 3, 0.5, out)
            expect(Array.from(out)).toEqual([0, 0, 0])
        })

        it('interpolates multi-component values', () => {
            // times: 0 -> [0, 10, 20], 1 -> [10, 20, 30]
            const tl = new Float32Array([0, 0, 10, 20, 1, 10, 20, 30])
            const out = new Float32Array(3)
            getTimelineValues(tl, 3, 0.5, out)
            expect(Array.from(out)).toEqual([5, 15, 25])
        })

        it('returns the exact component values when time matches a key', () => {
            const tl = new Float32Array([0, 2, 4, 1, 6, 8])
            const out = new Float32Array(2)
            getTimelineValues(tl, 2, 1, out)
            expect(Array.from(out)).toEqual([6, 8])
        })
    })

    describe('getIndexClosestToTime', () => {
        it('returns 0 when time is before the first key', () => {
            const tl = new Float32Array([0, 0, 1, 1, 2, 2])
            const idx = getIndexClosestToTime(tl, 1, -0.5)
            expect(idx).toBe(0)
        })

        it('returns the index of the closest key time between keys', () => {
            // key times at indices 0, 2, 4 (stride=2)
            const tl = new Float32Array([0, 0, 1, 1, 2, 2])
            const idxMid = getIndexClosestToTime(tl, 1, 0.6) // closer to 1 than 0
            expect(idxMid).toBe(2)

            const idxNearZero = getIndexClosestToTime(tl, 1, 0.2) // closer to 0 than 1
            expect(idxNearZero).toBe(0)
        })
    })

    describe('getIndexCloseToTime', () => {
        it('returns -1 when outside affordance, otherwise returns the closest key index', () => {
            const tl = new Float32Array([0, 0, 1, 1, 2, 2])
            // Within affordance of key time 1 (index 2)
            expect(getIndexCloseToTime(tl, 1, 1.01, 0.05)).toBe(2)
            // Outside affordance
            expect(getIndexCloseToTime(tl, 1, 1.1, 0.05)).toBe(-1)
        })
    })
})
