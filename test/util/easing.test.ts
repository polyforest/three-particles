import { easings, getEase } from '../../src/util/easing'

describe('easing', () => {
    describe('getEase', () => {
        it('should return methods for all EaseType values', () => {
            expect(getEase('linear')).not.toBeNull()
            expect(getEase('quadOut')).not.toBeNull()
            expect(() =>
                getEase(
                    // @ts-expect-error Expect error
                    'notexistent',
                ),
            ).toThrow()
        })
    })

    describe('linear', () => {
        it('should have no easing', () => {
            expect(easings.linear(0)).toEqual(0)
            expect(easings.linear(1)).toEqual(1)
            expect(easings.linear(0.25)).toEqual(0.25)
        })
    })

    describe('quadIn', () => {
        it('should exponentially increase', () => {
            expect(easings.quadIn(0)).toEqual(0)
            expect(easings.quadIn(1)).toEqual(1)
            expect(easings.quadIn(0.25)).toEqual(0.0625)
            expect(easings.quadIn(0.75)).toEqual(0.5625)
        })
    })

    describe('pow2Out', () => {
        it('should exponentially decrease', () => {
            expect(easings.quadOut(0)).toEqual(0)
            expect(easings.quadOut(1)).toEqual(1)
            expect(easings.quadOut(0.25)).toEqual(0.4375)
            expect(easings.quadOut(0.75)).toEqual(0.9375)
        })
    })

    describe('circleIn', () => {
        it('should ', () => {
            expect(easings.circIn(0)).toEqual(0)
            expect(easings.circIn(1)).toEqual(1)
        })
    })

    describe('circleOut', () => {
        it('should ', () => {
            expect(easings.circOut(0)).toEqual(0)
            expect(easings.circOut(1)).toEqual(1)
        })
    })
})
