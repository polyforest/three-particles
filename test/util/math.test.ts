import { closeTo } from '../../src/util/math'

describe('closeTo', () => {
    it('returns true if x is within tolerance of y', () => {
        expect(closeTo(0, 0)).toBeTruthy()
        expect(closeTo(0, 1e-17)).toBeTruthy()
        expect(closeTo(0, -1e-17)).toBeTruthy()
        expect(closeTo(0, 1e-13)).toBeFalsy()
        expect(closeTo(0, -1e-13)).toBeFalsy()
        expect(closeTo(1, 1 + 1e-17)).toBeTruthy()
        expect(closeTo(3, 3.099, 0.1)).toBeTruthy()
        expect(closeTo(3, 2.91, 0.1)).toBeTruthy()
        expect(closeTo(3, 2.89, 0.1)).toBeFalsy()
        expect(closeTo(3, 2.11, 0.1)).toBeFalsy()
    })
})
