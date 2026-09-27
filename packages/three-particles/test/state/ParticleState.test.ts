// Seeds Math.random before any other import: Zone.ts destructures `random`
// from `Math` at module-load time, so the seed must be in place first.
import '../helpers/lcgRandom'
import { seedRandom } from '../helpers/lcgRandom'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { Euler, Vector3 } from 'three'
import {
    parseEmitter,
    type ParticleEmitterModelJson,
} from '../../src/model/ParticleEmitterModel'
import {
    ParticleState,
    getParticlePropertyUpdater,
    particlePropertyUpdaters,
    RgbaColor,
    type ParticleProperties,
} from '../../src/state/ParticleState'

function emitterWithTimelines(
    timelines: {
        property: string
        timeline: number[]
        useEmitterDuration?: boolean
        mode?: 'add' | 'set'
        relative?: boolean
        low?: { min: number; max: number }
        high?: { min: number; max: number }
    }[],
    rotateToOrientation = false,
    emissionRate = 1,
) {
    const json: Partial<ParticleEmitterModelJson> = {
        uuid: 'test',
        name: 'e',
        enabled: true,
        loops: true,
        count: 1,
        duration: { duration: { min: 1, max: 1, ease: 'linear' } },
        emissionRate: {
            property: 'emissionRate',
            useEmitterDuration: true,
            low: { min: emissionRate, max: emissionRate, ease: 'linear' },
            high: { min: emissionRate, max: emissionRate, ease: 'linear' },
        },
        particleLifeExpectancy: {
            property: 'particleLifeExpectancy',
            useEmitterDuration: true,
            low: { min: 1, max: 1, ease: 'linear' },
            high: { min: 1, max: 1, ease: 'linear' },
        },
        spawn: {
            type: 'point',
            x: 0,
            y: 0,
            z: 0,
            w: 0,
            h: 0,
            d: 0,
            ease: 'linear',
        },
        rotateToOrientation,
        propertyTimelines: timelines.map((t) => ({
            property: t.property,
            timeline: t.timeline,
            useEmitterDuration: !!t.useEmitterDuration,
            ...(t.mode !== undefined && { mode: t.mode }),
            ...(t.relative !== undefined && { relative: t.relative }),
            ...(t.low && { low: { ...t.low, ease: 'linear' as const } }),
            ...(t.high && { high: { ...t.high, ease: 'linear' as const } }),
        })),
        material: null,
        geometry: null,
    }
    return parseEmitter({ emitterJson: json, materials: {} })
}

function makeProps(): ParticleProperties {
    return {
        position: new Vector3(),
        velocity: new Vector3(),
        scale: new Vector3(1, 1, 1),
        rotation: new Euler(),
        rotationVel: new Vector3(),
        orientation: new Euler(),
        orientationVel: new Vector3(),
        forwardVel: 0,
        tint: new RgbaColor(1, 1, 1, 1),
        origin: new Vector3(0.5, 0.5, 0.5),
    }
}

describe('ParticleState', () => {
    it('applies float timelines and integrates velocity over tickTime', () => {
        const emitter = emitterWithTimelines([
            { property: 'x', timeline: [0, 0, 1, 10] }, // x goes 0 -> 10
            { property: 'zVel', timeline: [0, 2, 1, 2] }, // vel.z constant 2
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1 // alpha = life

        // advance by 0.5s, alpha=0.5
        p.update(0.5, 0)
        // x from timeline = 5, then velocity integration adds to position.z not x
        expect(p.position.x).toBeCloseTo(5)
        // position.z should have moved by vel.z * dt = 2 * 0.5 = 1
        expect(p.position.z).toBeCloseTo(1)
    })

    it('uses emitter duration when timeline.useEmitterDuration=true', () => {
        const emitter = emitterWithTimelines([
            { property: 'y', timeline: [0, 0, 1, 8], useEmitterDuration: true },
        ])
        const p = new ParticleState(emitter)
        p.lifeExpectancy = 10
        p.reset()

        // with tickTime 0, particle alpha is 0 but emitter alpha drives the timeline
        p.update(0, 0.25)
        expect(p.position.y).toBeCloseTo(2) // 0.25 of 0->8
    })

    it('moves forward along the oriented forward direction and sets rotationFinal based on rotateToOrientation', () => {
        const emitter = emitterWithTimelines(
            [
                { property: 'forwardVel', timeline: [0, 2, 1, 2] }, // constant 2 m/s
                { property: 'rotationZ', timeline: [0, 0.2, 1, 0.2] },
                { property: 'orientationZ', timeline: [0, 0.3, 1, 0.3] },
            ],
            true,
        )
        const p = new ParticleState(emitter)
        p.lifeExpectancy = 1
        p.reset()

        // advance half a second
        p.update(0.5, 0)

        // forward vector starts along +Y, with orientationZ=0.3 rad it's rotated in XY plane
        // displacement magnitude should be forwardVel * dt = 1
        const displacement = new Vector3().copy(p.position)
        expect(displacement.length()).toBeCloseTo(1)

        // rotationFinal should be rotation + orientation when rotateToOrientation=true
        expect(p.rotationFinal.z).toBeCloseTo(0.2 + 0.3)
    })

    it('when rotateToOrientation=false, rotationFinal equals rotation', () => {
        const emitter = emitterWithTimelines(
            [
                { property: 'rotationX', timeline: [0, 0.1, 1, 0.1] },
                { property: 'orientationX', timeline: [0, 0.4, 1, 0.4] },
            ],
            false,
        )
        const p = new ParticleState(emitter)
        p.lifeExpectancy = 1
        p.reset()
        p.update(0.5, 0)
        expect(p.rotationFinal.x).toBeCloseTo(0.1)
    })

    it('applies color timeline; after reset tint is default until first update applies timeline', () => {
        const emitter = emitterWithTimelines([
            // color timeline: time stride of 4 (t, r, g, b)
            { property: 'color', timeline: [0, 1, 0, 0, 1, 0, 1, 0] },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        // After reset, tint is set to defaults (1,1,1,1) until first update applies timeline
        expect(p.tint.r).toBeCloseTo(1)
        expect(p.tint.g).toBeCloseTo(1)
        expect(p.tint.b).toBeCloseTo(1)

        p.update(0.5, 0)
        expect(p.tint.r).toBeCloseTo(0.5)
        expect(p.tint.g).toBeCloseTo(0.5)
        expect(p.tint.b).toBeCloseTo(0)

        // change current tint then reset and ensure it goes back to defaults, then apply timeline again
        p.tint.set(0, 0, 0, 1)
        p.reset()
        expect(p.tint.r).toBeCloseTo(1)
        expect(p.tint.g).toBeCloseTo(1)
        expect(p.tint.b).toBeCloseTo(1)
        p.update(0, 0)
        expect(p.tint.r).toBeCloseTo(1)
        expect(p.tint.g).toBeCloseTo(0)
        expect(p.tint.b).toBeCloseTo(0)
    })

    it('keeps the configured tint when a color timeline is empty (TP-2)', () => {
        const emitter = emitterWithTimelines([
            { property: 'color', timeline: [] },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        // An empty color timeline must not zero-fill the tint to black every
        // frame; the empty-timeline guard mirrors the float-property path.
        p.update(0.5, 0)
        expect(p.tint.r).toBeCloseTo(1)
        expect(p.tint.g).toBeCloseTo(1)
        expect(p.tint.b).toBeCloseTo(1)
    })
})

describe('ParticleState rotation integration', () => {
    it('integrates rotationVel even when initial rotation is zero', () => {
        const emitter = emitterWithTimelines([
            { property: 'rotationZVel', timeline: [0, 2, 1, 2] },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        expect(p.rotation.z).toBe(0)
        // tick 0.5s with rotationZVel = 2 rad/s
        p.update(0.5, 0)
        expect(p.rotation.z).toBeCloseTo(1)
    })
})

describe('getParticlePropertyUpdater', () => {
    it('returns working updater for known keys', () => {
        const keys = Object.keys(particlePropertyUpdaters)
        expect(keys.length).toBeGreaterThan(0)
        const props = makeProps()
        const updater = getParticlePropertyUpdater('x')
        updater(props, 3.14)
        expect(props.position.x).toBeCloseTo(3.14)

        const updVel = getParticlePropertyUpdater('zVel')
        updVel(props, 2)
        expect(props.velocity.z).toBeCloseTo(2)

        const updColor = getParticlePropertyUpdater('colorA')
        updColor(props, 0.25)
        expect(props.tint.a).toBeCloseTo(0.25)
    })

    it('returns no-op and warns exactly once for unknown key', () => {
        const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})
        const props = makeProps()
        const u1 = getParticlePropertyUpdater('doesNotExist')
        const u2 = getParticlePropertyUpdater('doesNotExist')

        // both should be no-ops
        props.position.x = 1
        u1(props, 5)
        expect(props.position.x).toBe(1)
        u2(props, 10)
        expect(props.position.x).toBe(1)

        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('warns on prototype-named keys instead of resolving them (TP-9)', () => {
        const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})
        const props = makeProps()

        for (const key of ['valueOf', 'toString', 'constructor']) {
            const updater = getParticlePropertyUpdater(key)
            // must be a no-op, not an Object.prototype member
            updater(props, 5)
            expect(spy).toHaveBeenCalledWith(
                expect.stringContaining(`the name ${key}`),
            )
        }

        expect(props.position.x).toBe(0)
        spy.mockRestore()
    })
})

describe('additive timelines (mode: "add")', () => {
    it('sums two additive timelines on one property', () => {
        const emitter = emitterWithTimelines([
            // tracked = curve(alpha) * (high - low) + low
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 0, 1, 1],
                low: { min: 0, max: 0 },
                high: { min: 1, max: 1 },
            },
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 0, 1, 2],
                low: { min: 0, max: 0 },
                high: { min: 2, max: 2 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        p.update(0.5, 0)
        // tracked A = 0 + 0.5 * 1 = 0.5, tracked B = 0 + 0.5 * 2 = 2 -> sum 2.5
        expect(p.velocity.x).toBeCloseTo(2.5)
    })

    it('adds additive contributions on top of a SET timeline on the same property', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'xVel',
                timeline: [0, 0, 1, 1], // SET: tracked 5 at alpha 0.5
                low: { min: 0, max: 0 },
                high: { min: 10, max: 10 },
            },
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 0, 1, 1],
                low: { min: 0, max: 0 },
                high: { min: 1.5, max: 1.5 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        p.update(0.5, 0)
        expect(p.velocity.x).toBeCloseTo(5 + 0.75)

        // JSON order must not matter: the SET value plus the additive sum.
        const reversed = new ParticleState(
            emitterWithTimelines([
                {
                    property: 'xVel',
                    mode: 'add',
                    timeline: [0, 0, 1, 1],
                    low: { min: 0, max: 0 },
                    high: { min: 1.5, max: 1.5 },
                },
                {
                    property: 'xVel',
                    timeline: [0, 0, 1, 1],
                    low: { min: 0, max: 0 },
                    high: { min: 10, max: 10 },
                },
            ]),
        )
        reversed.reset()
        reversed.lifeExpectancy = 1
        reversed.update(0.5, 0)
        expect(reversed.velocity.x).toBeCloseTo(5 + 0.75)
    })

    it('uses the last non-empty SET timeline as the base when several exist', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'xVel',
                timeline: [0, 1, 1, 1], // constant 5 (high falls back to low)
                low: { min: 5, max: 5 },
            },
            {
                property: 'xVel',
                timeline: [0, 1, 1, 1], // constant 7
                low: { min: 7, max: 7 },
            },
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 1, 1, 1], // constant 2
                low: { min: 2, max: 2 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        p.update(0.5, 0)
        expect(p.velocity.x).toBeCloseTo(7 + 2)
    })

    it('tracks additive curves per frame instead of accumulating them (no integral)', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 1, 1, 1], // constant tracked value 1
                low: { min: 1, max: 1 },
            },
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 1, 1, 1], // constant tracked value 2
                low: { min: 2, max: 2 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        for (let i = 0; i < 10; i++) {
            p.update(0.1, 0)
            // The property must stay at the summed tracked value each frame;
            // an accumulating implementation would grow by 3 every tick.
            expect(p.velocity.x).toBeCloseTo(3)
        }
        // position integrates the (constant) velocity: 10 ticks * 3 u/s * 0.1 s
        expect(p.position.x).toBeCloseTo(3)
    })

    it('applies an emitter-clock additive timeline against emitter alpha', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'xVel',
                mode: 'add',
                useEmitterDuration: true,
                timeline: [0, 0, 1, 10],
                low: { min: 0, max: 0 },
                high: { min: 10, max: 10 },
            },
        ])
        const p = new ParticleState(emitter)
        // Long life so the particle alpha stays ~0 while the emitter alpha varies.
        p.lifeExpectancy = 100
        p.reset()

        p.update(0, 0.25)
        // tracked = low + curve(0.25) * diff = 0 + 2.5 * 10 = 25
        expect(p.velocity.x).toBeCloseTo(25)

        // Reassigned from the emitter clock every frame, not accumulated.
        p.update(0, 0.75)
        expect(p.velocity.x).toBeCloseTo(75)
    })

    it('sums additive heading-rate timelines into orientationVel and integrates orientation', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'orientationZVel',
                mode: 'add',
                timeline: [0, 0, 1, 1],
                low: { min: 0, max: 0 },
                high: { min: 1, max: 1 },
            },
            {
                property: 'orientationZVel',
                mode: 'add',
                timeline: [0, 0, 1, 2],
                low: { min: 0, max: 0 },
                high: { min: 2, max: 2 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        p.update(0.5, 0)
        // tracked A = 0 + 0.5 * 1 = 0.5, tracked B = 0 + 0.5 * 2 = 2 -> 2.5 rad/s,
        // integrated over 0.5 s
        expect(p.orientationVel.z).toBeCloseTo(2.5)
        expect(p.orientation.z).toBeCloseTo(1.25)
    })

    it('honors relative low/high draws per additive timeline', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'xVel',
                mode: 'add',
                relative: true,
                timeline: [0, 0, 1, 1],
                // relative: high draw 1 folds to high = 1 + low = 2, diff = 1
                low: { min: 1, max: 1 },
                high: { min: 1, max: 1 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        p.update(0.5, 0)
        expect(p.velocity.x).toBeCloseTo(1.5)
    })
})

describe('spawn timelines (single-keyframe SET)', () => {
    it('lands a single-keyframe SET at reset, before any update', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'orientationZ',
                timeline: [0, 0],
                low: { min: 2, max: 2 },
                high: { min: 2, max: 2 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        expect(p.orientation.z).toBeCloseTo(2)
        p.update(0.5, 0)
        expect(p.orientation.z).toBeCloseTo(2)
    })

    it('lets the heading integrate under orientationVel after the spawn value', () => {
        const emitter = emitterWithTimelines([
            {
                // Legacy theta0: heading starts at pi/2 ...
                property: 'orientationZ',
                timeline: [0, 0],
                low: { min: Math.PI / 2, max: Math.PI / 2 },
                high: { min: Math.PI / 2, max: Math.PI / 2 },
            },
            {
                // ... then curls at a constant 1 rad/s.
                property: 'orientationZVel',
                mode: 'add',
                timeline: [0, 1, 1, 1],
                low: { min: 1, max: 1 },
                high: { min: 1, max: 1 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        p.update(0.5, 0)
        expect(p.orientationVel.z).toBeCloseTo(1)
        // pi/2 + 1 rad/s * 0.5 s: the curl integrated on top of the start
        // value; re-pinning orientationZ every frame would have cancelled it.
        expect(p.orientation.z).toBeCloseTo(Math.PI / 2 + 0.5)
        p.update(0.5, 0)
        expect(p.orientation.z).toBeCloseTo(Math.PI / 2 + 1.0)
    })

    it('keeps a single-keyframe SET color constant for the whole life', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'color',
                timeline: [0, 1, 0.5, 0.25],
                low: { min: 0, max: 0 },
                high: { min: 1, max: 1 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        const tint = () => [p.tint.r, p.tint.g, p.tint.b]
        expect(tint()).toEqual([1, 0.5, 0.25])
        p.update(0.5, 0)
        expect(tint()).toEqual([1, 0.5, 0.25])
        p.update(0.5, 0)
        expect(tint()).toEqual([1, 0.5, 0.25])
    })

    it('rides per-frame additive timelines on top of the spawn value', () => {
        // Additive mode is gated to the velocity/heading-rate ids, so the
        // coexistence case lives on xVel: a per-leaf initial velocity plus a
        // per-frame additive wind layer on the same property.
        const emitter = emitterWithTimelines([
            {
                property: 'xVel',
                timeline: [0, 0],
                low: { min: 2, max: 2 },
                high: { min: 2, max: 2 },
            },
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 0, 1, 1],
                low: { min: 0, max: 0 },
                high: { min: 4, max: 4 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        expect(p.velocity.x).toBeCloseTo(2)
        p.update(0.5, 0)
        expect(p.velocity.x).toBeCloseTo(2 + 2)
        p.update(0.5, 0)
        expect(p.velocity.x).toBeCloseTo(2 + 4)
    })

    it('keeps applying a single-keyframe ADD every frame', () => {
        // A single-point ADD is a constant contribution, not a start value:
        // it must stay in the per-frame sum on top of the moving SET.
        const emitter = emitterWithTimelines([
            {
                property: 'xVel',
                timeline: [0, 0, 1, 1],
                low: { min: 0, max: 0 },
                high: { min: 4, max: 4 },
            },
            {
                property: 'xVel',
                mode: 'add',
                timeline: [0, 1],
                low: { min: 3, max: 3 },
                high: { min: 3, max: 3 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        p.update(0.5, 0)
        expect(p.velocity.x).toBeCloseTo(2 + 3)
        p.update(0.5, 0)
        expect(p.velocity.x).toBeCloseTo(4 + 3)
    })

    it('never applies an empty timeline', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'orientationZ',
                timeline: [],
                low: { min: 2, max: 2 },
                high: { min: 2, max: 2 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        expect(p.orientation.z).toBeCloseTo(0)
        p.update(0.5, 0)
        expect(p.orientation.z).toBeCloseTo(0)
    })

    it('re-applies a multi-keyframe SET every frame', () => {
        const emitter = emitterWithTimelines([
            {
                property: 'orientationZ',
                timeline: [0, 0, 1, 1],
                low: { min: 2, max: 2 },
                high: { min: 10, max: 10 },
            },
        ])
        const p = new ParticleState(emitter)
        p.reset()
        p.lifeExpectancy = 1

        // Nothing lands at reset (the first application is the first update) ...
        expect(p.orientation.z).toBeCloseTo(0)
        // ... and the property is re-pinned every frame.
        p.update(0.5, 0)
        expect(p.orientation.z).toBeCloseTo(6)
        p.update(0.5, 0)
        expect(p.orientation.z).toBeCloseTo(10)
    })
})

/**
 * The example app's effect JSONs are the reference fixtures for the format
 * (docs/USAGE.md). They contain only SET-mode timelines, so parsing them and
 * integrating one particle per emitter must produce exactly the same numbers
 * as before the additive-mode change — pinned here as exact goldens.
 *
 * Determinism: the seeded LCG (helpers/lcgRandom) fixes spawn-zone draws and
 * per-leaf low/high draws; integration is then a pure function of the code.
 */
describe('fixture effects parse and integrate unchanged', () => {
    const fixtureDir = path.join(__dirname, '../../../example/resources')

    interface Snapshot {
        position: number[]
        velocity: number[]
        orientation: number[]
        orientationVel: number[]
        forwardVel: number
        tint: number[]
        rotationFinal: number[]
    }

    const snapshot = (p: ParticleState): Snapshot => ({
        position: [p.position.x, p.position.y, p.position.z],
        velocity: [p.velocity.x, p.velocity.y, p.velocity.z],
        orientation: [p.orientation.x, p.orientation.y, p.orientation.z],
        orientationVel: [
            p.orientationVel.x,
            p.orientationVel.y,
            p.orientationVel.z,
        ],
        forwardVel: p.forwardVel,
        tint: [p.tint.r, p.tint.g, p.tint.b, p.tint.a],
        rotationFinal: [
            p.rotationFinal.x,
            p.rotationFinal.y,
            p.rotationFinal.z,
        ],
    })

    // Exact goldens captured from the pre-change integration.
    const GOLDEN: Record<string, Snapshot[][]> = {
        'fire.json': [
            [
                {
                    position: [
                        -0.18455320795188285, 0.01989804292769757,
                        0.3042648691244241,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.10101673984900117],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
                {
                    position: [
                        -0.23295882007447416, 0.4974510731924394,
                        0.3042648691244241,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.10101673984900117],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
                {
                    position: [
                        -0.28338133270217297, 0.9949021463848792,
                        0.3042648691244241,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.10101673984900117],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
                {
                    position: [
                        -0.38422635795757015, 1.9898042927697586,
                        0.3042648691244241,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.10101673984900117],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
            ],
        ],
        'mesh.json': [
            [
                {
                    position: [
                        0.24548911716209354, 0.013213017093409149,
                        -0.00027887726078259313,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.8491108915768564],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
                {
                    position: [
                        -0.11484367245137456, 0.3303254273352289,
                        -0.00027887726078259313,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.8491108915768564],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
                {
                    position: [
                        -0.4901903282987371, 0.6606508546704579,
                        -0.00027887726078259313,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.8491108915768564],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
                {
                    position: [
                        -1.2408836399934648, 1.3213017093409134,
                        -0.00027887726078259313,
                    ],
                    velocity: [0, 0, 0],
                    orientation: [0, 0, 0.8491108915768564],
                    orientationVel: [0, 0, 0],
                    forwardVel: 1,
                    tint: [
                        0.9399999976158142, 0.16500000655651093,
                        0.02800000086426735, 0,
                    ],
                    rotationFinal: [0, 0, 0],
                },
            ],
        ],
    }

    for (const fixture of ['fire.json', 'mesh.json']) {
        it(`integrates ${fixture} identically to the pre-additive runtime`, () => {
            // Pin the draw sequence: goldens were captured from seed 42 and
            // must not depend on how many draws earlier tests consumed.
            seedRandom(42)
            const effectJson = JSON.parse(
                fs.readFileSync(path.join(fixtureDir, fixture), 'utf8'),
            ) as { emitters: object[] }

            // Missing material/geometry references warn once per emitter —
            // the fixtures reference ids that resolve outside this test.
            const warnSpy = jest
                .spyOn(console, 'warn')
                .mockImplementation(() => {})

            const results = effectJson.emitters.map((emitterJson) => {
                const model = parseEmitter({
                    emitterJson,
                    materials: {},
                    geometries: {},
                })
                // Every fixture timeline must parse as plain SET mode.
                expect(
                    model.propertyTimelines.every((t) => t.mode === 'set'),
                ).toBe(true)

                const p = new ParticleState(model)
                p.lifeExpectancy = 2
                p.reset()
                const snaps: Snapshot[] = []
                for (let tick = 1; tick <= 100; tick++) {
                    p.update(1 / 50, 0.3)
                    if ([1, 25, 50, 100].includes(tick)) snaps.push(snapshot(p))
                }
                return snaps
            })

            warnSpy.mockRestore()
            expect(results).toEqual(GOLDEN[fixture])
        })
    }
})
