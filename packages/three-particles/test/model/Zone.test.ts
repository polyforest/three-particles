import { Vector3 } from 'three'
import { parseZone, randomFromZone } from '../../src/model/Zone'

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
