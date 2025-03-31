import { defaults } from 'lodash'
import { EaseType, getEase } from '../util'
import { Vector3 } from 'three'
import { PartialDeep } from 'type-fest'

const { random, cos, sin, PI, acos, cbrt } = Math

export interface Zone {
    type: 'point' | 'box' | 'ellipsoid'
    x: number
    y: number
    z: number
    w: number
    h: number
    d: number

    /** The easing from the center to the edge */
    ease: EaseType
}

export const zoneDefaults = {
    type: 'point',
    x: 0,
    y: 0,
    z: 0,
    w: 0,
    h: 0,
    d: 0,
    ease: 'linear',
} as const satisfies Zone

export function sanitizeZone(zone: PartialDeep<Zone>): asserts zone is Zone {
    defaults(zone, zoneDefaults)
}

function setEaseVec(easeType: EaseType, out: Vector3) {
    const ease = getEase(easeType)
    out.x = ease(random()) - 0.5
    out.y = ease(random()) - 0.5
    out.z = ease(random()) - 0.5
}

const easeVec = new Vector3()
const scl = new Vector3()
const TWO_PI = 2 * PI

export function randomFromZone(zone: Zone, out: Vector3): void {
    switch (zone.type) {
        case 'point':
            out.set(zone.x, zone.y, zone.z)
            break
        case 'box':
            setEaseVec(zone.ease, easeVec)
            easeVec.multiply(scl.set(zone.w, zone.h, zone.d))
            out.set(zone.x, zone.y, zone.z).add(easeVec)
            break
        case 'ellipsoid': {
            // pick a random angle
            const u = random()
            const v = random()
            const theta = TWO_PI * u
            const phi = acos(2 * v - 1)
            // radius, uniform distribution
            const r = cbrt(getEase(zone.ease)(random())) // ensures uniform distribution in

            // convert to Cartesian coordinates
            const sinTheta = sin(theta)
            const cosTheta = cos(theta)
            const sinPhi = sin(phi)
            const cosPhi = cos(phi)
            out.set(
                r * zone.w * sinPhi * cosTheta,
                r * zone.h * sinPhi * sinTheta,
                r * zone.d * cosPhi,
            )
        }
    }
}
