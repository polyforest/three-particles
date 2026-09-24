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

        it('throws at parse time on unknown ease ids (TP-8)', () => {
            expect(() =>
                parseRange({
                    // @ts-expect-error Expect error
                    ease: 'notAnEase',
                }),
            ).toThrow("Invalid ease id 'notAnEase' in range")
        })

        it('throws on prototype-named ease ids (TP-8)', () => {
            expect(() =>
                parseRange({
                    // @ts-expect-error Expect error
                    ease: 'toString',
                }),
            ).toThrow("Invalid ease id 'toString' in range")
        })

        it('keeps known ease ids unchanged (TP-8)', () => {
            const r = parseRange({ min: 1, max: 2, ease: 'quadOut' })
            expect(r.ease).toBe('quadOut')
        })
    })
})
