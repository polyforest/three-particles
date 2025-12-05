import { parseRange } from '../../src/model/RangeModel'

describe('RangeModel', () => {
    describe('parseRange', () => {
        it('should set defaults', () => {
            const r = parseRange({})
            expect(r.min).toBe(0)
            expect(r.max).toBe(0)
            expect(r.ease).toBe('linear')
        })
        it('should default max to min when not provided', () => {
            const r = parseRange({ min: 3 })
            expect(r.max).toBe(3)
        })
    })
})
