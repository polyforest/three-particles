import { parseZone, zoneDefaults, zoneToJson } from '../../src/model/Zone'

describe('Zone', () => {
    describe('parseZone', () => {
        it('should apply defaults', () => {
            const z = parseZone({})
            expect(z).toEqual(zoneDefaults)
        })
        it('should override specified values', () => {
            const z = parseZone({ type: 'box', w: 1, h: 2, d: 3 })
            expect(z.type).toBe('box')
            expect(z.w).toBe(1)
            expect(z.h).toBe(2)
            expect(z.d).toBe(3)
        })
    })

    describe('zoneToJson', () => {
        it('should omit defaults', () => {
            const z = parseZone({})
            const json = zoneToJson(z)
            expect(json).toEqual({})
        })
        it('should include non-defaults', () => {
            const z = parseZone({ type: 'box', w: 1 })
            const json = zoneToJson(z)
            expect(json.type).toBe('box')
            expect(json.w).toBe(1)
        })
    })
})
