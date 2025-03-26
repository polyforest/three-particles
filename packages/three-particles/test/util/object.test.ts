import { isNonNil } from '../../src/util'

describe('object util', () => {
    describe('isNonNil', () => {
        it('should return true if value is not nullish', () => {
            expect(isNonNil(null)).toBeFalsy()
            expect(isNonNil(undefined)).toBeFalsy()
            expect(isNonNil(0)).toBeTruthy()
            expect(isNonNil(1)).toBeTruthy()
        })
    })
})
