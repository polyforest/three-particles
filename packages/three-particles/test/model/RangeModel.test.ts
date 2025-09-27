import { rangeModelToJson, parseRange } from '../../src/model/RangeModel'

describe('RangeModel', () => {
    describe('parseRange', () => {
        it('should set defaults', () => {
            const r = parseRange(undefined)
            expect(r.min).toBe(0)
            expect(r.max).toBe(0)
            expect(r.ease).toBe('linear')
        })
        it('should default max to min when not provided', () => {
            const r = parseRange({ min: 3 })
            expect(r.max).toBe(3)
        })
    })

    describe('rangeModelToJson', () => {
        it('should omit defaults', () => {
            const r = parseRange({})
            const json = rangeModelToJson(r)
            expect(json).toEqual({})
        })
        it('should include non-defaults', () => {
            const r = parseRange({ min: 1, max: 2, ease: 'sineIn' })
            const json = rangeModelToJson(r)
            expect(json.min).toBe(1)
            expect(json.max).toBe(2)
            expect(json.ease).toBe('sineIn')
        })
        it('should omit max if equals min', () => {
            const r = parseRange({ min: 5, max: 5 })
            const json = rangeModelToJson(r)
            expect(json).toEqual({ min: 5 })
        })
    })
})
