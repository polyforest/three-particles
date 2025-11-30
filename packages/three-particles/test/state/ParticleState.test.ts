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
    }[],
    rotateToOrientation = false,
) {
    const json: ParticleEmitterModelJson = {
        uuid: 'test',
        name: 'e',
        enabled: true,
        loops: true,
        count: 1,
        duration: { duration: { min: 1, max: 1, ease: 'linear' } },
        emissionRate: {
            property: 'emissionRate',
            useEmitterDuration: true,
            low: { min: 1, max: 1, ease: 'linear' },
            high: { min: 1, max: 1, ease: 'linear' },
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
            timeline: new Float32Array(t.timeline),
            useEmitterDuration: !!t.useEmitterDuration,
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
})
