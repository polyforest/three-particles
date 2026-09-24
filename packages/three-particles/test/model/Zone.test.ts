import { Vector3 } from 'three'
import {
    parseZone,
    randomFromZone,
    zoneDefaults,
    type Zone,
} from '../../src/model/Zone'

describe('Zone ellipsoid spawn', () => {
    it('returns center point when extents are zero', () => {
        const zone = parseZone({
            type: 'ellipsoid',
            x: 1,
            y: 2,
            z: 3,
            w: 0,
            h: 0,
            d: 0,
        })
        const out = new Vector3()
        randomFromZone(zone, out)
        expect(out.x).toBe(zone.x)
        expect(out.y).toBe(zone.y)
        expect(out.z).toBe(zone.z)
    })

    it('spawns within half-extents around center', () => {
        const zone = parseZone({
            type: 'ellipsoid',
            x: 10,
            y: -5,
            z: 2,
            w: 2,
            h: 4,
            d: 6,
            ease: 'linear',
        })
        const out = new Vector3()
        randomFromZone(zone, out)
        const halfW = 0.5 * zone.w
        const halfH = 0.5 * zone.h
        const halfD = 0.5 * zone.d
        expect(Math.abs(out.x - zone.x)).toBeLessThanOrEqual(halfW + 1e-8)
        expect(Math.abs(out.y - zone.y)).toBeLessThanOrEqual(halfH + 1e-8)
        expect(Math.abs(out.z - zone.z)).toBeLessThanOrEqual(halfD + 1e-8)
    })
})

describe('known zone types still spawn (TP-7)', () => {
    it('point zones spawn at the exact point', () => {
        const zone = parseZone({ type: 'point', x: 4, y: 5, z: 6 })
        const out = new Vector3(99, 99, 99)
        randomFromZone(zone, out)
        expect(out.x).toBe(4)
        expect(out.y).toBe(5)
        expect(out.z).toBe(6)
    })

    it('box zones spawn within the box extents', () => {
        const zone = parseZone({
            type: 'box',
            x: 1,
            y: 2,
            z: 3,
            w: 8,
            h: 6,
            d: 4,
            ease: 'linear',
        })
        for (let i = 0; i < 50; i++) {
            const out = new Vector3()
            randomFromZone(zone, out)
            expect(out.x).toBeGreaterThanOrEqual(zone.x - zone.w / 2 - 1e-8)
            expect(out.x).toBeLessThan(zone.x + zone.w / 2 + 1e-8)
            expect(out.y).toBeGreaterThanOrEqual(zone.y - zone.h / 2 - 1e-8)
            expect(out.y).toBeLessThan(zone.y + zone.h / 2 + 1e-8)
            expect(out.z).toBeGreaterThanOrEqual(zone.z - zone.d / 2 - 1e-8)
            expect(out.z).toBeLessThan(zone.z + zone.d / 2 + 1e-8)
        }
    })

    it('throws on unknown zone types instead of writing nothing (TP-7)', () => {
        const zone = { ...zoneDefaults, type: 'pyramid' } as unknown as Zone
        const out = new Vector3(99, 99, 99)
        expect(() => randomFromZone(zone, out)).toThrow(
            "Unknown spawn zone type: 'pyramid'",
        )
    })
})

describe('parseZone ease validation (TP-8)', () => {
    it('throws at parse time on unknown ease ids', () => {
        expect(() =>
            parseZone({
                type: 'ellipsoid',
                // @ts-expect-error Expect error
                ease: 'notAnEase',
            }),
        ).toThrow("Invalid ease id 'notAnEase' in zone 'ellipsoid'")
    })

    it('throws at parse time on prototype-named ease ids', () => {
        expect(() =>
            parseZone({
                type: 'box',
                // @ts-expect-error Expect error
                ease: 'toString',
            }),
        ).toThrow("Invalid ease id 'toString' in zone 'box'")
    })

    it('keeps known ease ids unchanged', () => {
        const zone = parseZone({ type: 'box', ease: 'quadIn' })
        expect(zone.ease).toBe('quadIn')
    })
})
