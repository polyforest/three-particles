import { seedRandom } from '../helpers/lcgRandom'
import { Points, PointsMaterial, ShaderMaterial } from 'three'
import {
    parseParticleEffect,
    type ParticleEffectModelJson,
} from '../../src/model/ParticleEffectModel'
import type { ParticleEmitterModelJson } from '../../src/model/ParticleEmitterModel'
import type { SubEmitterModelJson } from '../../src/model/SubEmitterModel'
import { ParticleEffect } from '../../src/object/ParticleEffect'
import { MAX_SUB_EMITTER_PARTICLES } from '../../src/object/SubEmitterSystem'
import { ParticleEmitterPoints } from '../../src/object/ParticleEmitterPoints'

const constant = (property: string, value: number) => ({
    property,
    timeline: [0, 1],
    low: { min: value, max: value, ease: 'linear' as const },
    high: { min: value, max: value, ease: 'linear' as const },
})

/**
 * An emitter spawning at the origin: `rate` particles per second for
 * `duration` seconds, each living `life` seconds.
 */
function emitter(
    uuid: string,
    opts: {
        count?: number
        rate?: number
        life?: number
        duration?: number
        loops?: boolean
        timelines?: ReturnType<typeof constant>[]
        subEmitters?: SubEmitterModelJson[]
        maxInstances?: number
    } = {},
): ParticleEmitterModelJson {
    const {
        count = 10,
        rate = 1000,
        life = 1,
        duration = 1,
        loops = false,
    } = opts
    return {
        uuid,
        loops,
        count,
        duration: {
            duration: { min: duration, max: duration, ease: 'linear' },
        },
        emissionRate: {
            property: 'emissionRate',
            useEmitterDuration: true,
            low: { min: rate, max: rate, ease: 'linear' },
            high: { min: rate, max: rate, ease: 'linear' },
        },
        particleLifeExpectancy: {
            property: 'particleLifeExpectancy',
            useEmitterDuration: true,
            low: { min: life, max: life, ease: 'linear' },
            high: { min: life, max: life, ease: 'linear' },
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
        propertyTimelines: opts.timelines ?? [],
        material: 'pts',
        subEmitters: opts.subEmitters,
        subEmitterMaxInstances: opts.maxInstances,
    }
}

function makeEffect(emitters: ParticleEmitterModelJson[]): ParticleEffect {
    const json: ParticleEffectModelJson = { emitters }
    const model = parseParticleEffect({
        effectJson: json,
        bundledMaterials: {
            pts: new PointsMaterial(),
            shd: new ShaderMaterial({
                fragmentShader: 'void main() { gl_FragColor = vColor; }',
                userData: {
                    particleShader: { mode: 'fragment', render: 'points' },
                },
            }),
        },
        externalMaterials: {},
        bundledTextures: {},
        bundledGeometries: {},
        externalGeometries: {},
    })
    return new ParticleEffect(model)
}

const pool = (effect: ParticleEffect, uuid: string) =>
    effect.subEmitterSystem!.pools.get(uuid)!

function step(effect: ParticleEffect, seconds: number, dT = 1 / 60) {
    for (let t = 0; t < seconds - 1e-9; t += dT) effect.update(dT)
}

describe('sub-emitters', () => {
    beforeEach(() => seedRandom())

    it('templates do not emit on their own', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 100,
                subEmitters: [{ emitter: 'child', trigger: { type: 'death' } }],
            }),
            emitter('child'),
        ])
        step(effect, 1)
        expect(pool(effect, 'child').activeStates).toHaveLength(0)
        // One object per root emitter plus one per template pool.
        expect(effect.children).toHaveLength(2)
    })

    it('birth fires once per spawned particle, at the particle', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 3,
                life: 100,
                subEmitters: [{ emitter: 'child', trigger: { type: 'birth' } }],
            }),
            emitter('child', { life: 100, duration: 10 }),
        ])
        step(effect, 0.5)
        expect(pool(effect, 'child').activeStates).toHaveLength(3)
    })

    it('death fires when a particle reaches the end of its life, at its position', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 0.5,
                timelines: [constant('x', 2)],
                subEmitters: [{ emitter: 'child', trigger: { type: 'death' } }],
            }),
            emitter('child', { life: 100, duration: 10 }),
        ])
        step(effect, 0.4)
        expect(pool(effect, 'child').activeStates).toHaveLength(0)
        step(effect, 0.2)
        const live = pool(effect, 'child').activeStates
        expect(live).toHaveLength(1)
        expect(live[0].offset.x).toBeCloseTo(2)
    })

    it('age triggers fire once, by fraction or seconds', () => {
        const byFraction = makeEffect([
            emitter('root', {
                count: 1,
                life: 2,
                subEmitters: [
                    { emitter: 'child', trigger: { type: 'age', at: 0.5 } },
                ],
            }),
            emitter('child', { life: 100, duration: 10 }),
        ])
        step(byFraction, 0.9)
        expect(pool(byFraction, 'child').activeStates).toHaveLength(0)
        step(byFraction, 0.2)
        expect(pool(byFraction, 'child').activeStates).toHaveLength(1)
        step(byFraction, 0.5)
        expect(pool(byFraction, 'child').activeStates).toHaveLength(1)

        const bySeconds = makeEffect([
            emitter('root', {
                count: 1,
                life: 10,
                subEmitters: [
                    {
                        emitter: 'child',
                        trigger: { type: 'age', at: 0.25, unit: 'seconds' },
                    },
                ],
            }),
            emitter('child', { life: 100, duration: 10 }),
        ])
        step(bySeconds, 0.2)
        expect(pool(bySeconds, 'child').activeStates).toHaveLength(0)
        step(bySeconds, 0.1)
        expect(pool(bySeconds, 'child').activeStates).toHaveLength(1)
    })

    it('position triggers fire once on crossing and can kill the particle', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 10,
                timelines: [constant('y', 1), constant('yVel', 0)],
                subEmitters: [
                    {
                        emitter: 'splash',
                        trigger: {
                            type: 'position',
                            axis: 'y',
                            op: '<',
                            value: 0.5,
                        },
                        killParticle: true,
                    },
                ],
            }),
            emitter('splash', { life: 100, duration: 10 }),
        ])
        // The y timeline pins the particle at 1: above the line, no fire.
        step(effect, 0.3)
        expect(pool(effect, 'splash').activeStates).toHaveLength(0)
    })

    it('a falling particle splashes at the line and is removed', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                rate: 1000,
                life: 10,
                // One spawn only: a killed particle is not replaced.
                duration: 0.02,
                timelines: [constant('yVel', -1)],
                subEmitters: [
                    {
                        emitter: 'splash',
                        trigger: {
                            type: 'position',
                            axis: 'y',
                            op: '<',
                            value: -0.5,
                        },
                        killParticle: true,
                    },
                ],
            }),
            emitter('splash', { life: 100, duration: 10 }),
        ])
        step(effect, 0.4)
        expect(pool(effect, 'splash').activeStates).toHaveLength(0)
        step(effect, 0.2)
        const live = pool(effect, 'splash').activeStates
        expect(live).toHaveLength(1)
        expect(live[0].offset.y).toBeLessThan(-0.5)
        expect(live[0].offset.y).toBeGreaterThan(-0.6)
        // The killed parent is gone.
        const root = effect.children[0] as Points
        expect(root.geometry.drawRange.count).toBe(0)
    })

    it('world-space position triggers apply the effect transform', () => {
        const make = (space: 'local' | 'world') => {
            const effect = makeEffect([
                emitter('root', {
                    count: 1,
                    life: 10,
                    subEmitters: [
                        {
                            emitter: 'child',
                            trigger: {
                                type: 'position',
                                axis: 'y',
                                op: '>',
                                value: 1,
                                space,
                            },
                        },
                    ],
                }),
                emitter('child', { life: 100, duration: 10 }),
            ])
            effect.position.y = 5
            effect.updateMatrixWorld()
            step(effect, 0.1)
            return pool(effect, 'child').activeStates.length
        }
        expect(make('local')).toBe(0)
        expect(make('world')).toBe(1)
    })

    it('probability is seeded and deterministic', () => {
        const run = () => {
            seedRandom(7)
            const effect = makeEffect([
                emitter('root', {
                    count: 40,
                    life: 100,
                    subEmitters: [
                        {
                            emitter: 'child',
                            trigger: { type: 'birth' },
                            probability: 0.5,
                        },
                    ],
                }),
                emitter('child', {
                    count: 1,
                    life: 100,
                    duration: 10,
                    maxInstances: 100,
                }),
            ])
            step(effect, 0.2)
            return pool(effect, 'child').activeStates.length
        }
        const first = run()
        expect(first).toBeGreaterThan(5)
        expect(first).toBeLessThan(35)
        expect(run()).toBe(first)
    })

    it('drops spawns past the pool cap', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 10,
                life: 100,
                subEmitters: [{ emitter: 'child', trigger: { type: 'birth' } }],
            }),
            emitter('child', { life: 100, duration: 10, maxInstances: 3 }),
        ])
        step(effect, 0.2)
        expect(pool(effect, 'child').activeStates).toHaveLength(3)
    })

    it('drops spawns past the effect-wide particle budget', () => {
        const big = Math.floor(MAX_SUB_EMITTER_PARTICLES / 2)
        const effect = makeEffect([
            emitter('root', {
                count: 5,
                life: 100,
                subEmitters: [{ emitter: 'child', trigger: { type: 'birth' } }],
            }),
            emitter('child', {
                count: big,
                rate: 1,
                life: 100,
                duration: 10,
                maxInstances: 5,
            }),
        ])
        step(effect, 0.1)
        expect(pool(effect, 'child').activeStates).toHaveLength(2)
        expect(effect.subEmitterSystem!.reservedParticles).toBe(big * 2)
    })

    it('children inherit a fraction of the parent velocity', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 0.1,
                timelines: [constant('xVel', 4)],
                subEmitters: [
                    {
                        emitter: 'child',
                        trigger: { type: 'death' },
                        inheritVelocity: 0.5,
                    },
                ],
            }),
            emitter('child', { count: 1, life: 100, duration: 10 }),
        ])
        step(effect, 0.2)
        const instance = pool(effect, 'child').activeStates[0]
        expect(instance.spawnVelocity.x).toBeCloseTo(2)
        const particle = instance.particles.find((p) => p.active)!
        const before = particle.position.x
        step(effect, 0.5)
        expect(particle.position.x - before).toBeCloseTo(1, 1)
    })

    it('children multiply their color by the parent color', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 0.1,
                timelines: [constant('colorR', 0.5), constant('colorA', 0.25)],
                subEmitters: [
                    {
                        emitter: 'child',
                        trigger: { type: 'death' },
                        inheritColor: true,
                    },
                ],
            }),
            emitter('child', { count: 1, life: 100, duration: 10 }),
        ])
        step(effect, 0.2)
        const instance = pool(effect, 'child').activeStates[0]
        expect(instance.tintMultiplier).toMatchObject({
            r: 0.5,
            g: 1,
            b: 1,
            a: 0.25,
        })
        const renderer = effect.children.find(
            (c) =>
                c instanceof ParticleEmitterPoints && c !== effect.children[0],
        ) as Points
        const color = renderer.geometry.attributes.color.array as Float32Array
        expect(color[0]).toBeCloseTo(0.5)
        expect(color[3]).toBeCloseTo(0.25)
    })

    it('renders instances at their spawn points in one draw', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 2,
                life: 0.1,
                duration: 0.02,
                timelines: [constant('x', 3)],
                subEmitters: [{ emitter: 'child', trigger: { type: 'death' } }],
            }),
            emitter('child', {
                count: 2,
                life: 100,
                duration: 10,
                maxInstances: 4,
            }),
        ])
        step(effect, 0.3)
        const renderer = effect.children[1] as Points
        expect(renderer.geometry.attributes.position.count).toBe(2 * 4)
        const pos = renderer.geometry.attributes.position.array as Float32Array
        expect(renderer.geometry.drawRange.count).toBe(4)
        for (let i = 0; i < 4; i++) expect(pos[i * 3]).toBeCloseTo(3)
    })

    it('chains nest: a child can trigger its own template', () => {
        const effect = makeEffect([
            emitter('a', {
                count: 1,
                life: 0.1,
                duration: 0.02,
                subEmitters: [{ emitter: 'b', trigger: { type: 'death' } }],
            }),
            emitter('b', {
                count: 2,
                life: 0.1,
                duration: 0.02,
                subEmitters: [{ emitter: 'c', trigger: { type: 'death' } }],
            }),
            emitter('c', {
                count: 1,
                life: 100,
                duration: 10,
                maxInstances: 10,
            }),
        ])
        step(effect, 0.5)
        expect(pool(effect, 'c').activeStates).toHaveLength(2)
    })

    it('instances play once, then return to the pool', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 0.1,
                duration: 0.02,
                subEmitters: [{ emitter: 'child', trigger: { type: 'death' } }],
            }),
            emitter('child', {
                count: 1,
                life: 0.2,
                duration: 0.1,
                loops: true,
            }),
        ])
        step(effect, 0.2)
        expect(pool(effect, 'child').activeStates).toHaveLength(1)
        step(effect, 1)
        expect(pool(effect, 'child').activeStates).toHaveLength(0)
        expect(effect.subEmitterSystem!.reservedParticles).toBe(0)
    })

    it('reset clears every instance and dispose releases the pools', () => {
        const effect = makeEffect([
            emitter('root', {
                count: 3,
                life: 100,
                subEmitters: [{ emitter: 'child', trigger: { type: 'birth' } }],
            }),
            emitter('child', { life: 100, duration: 10 }),
        ])
        step(effect, 0.2)
        expect(pool(effect, 'child').activeStates).toHaveLength(3)
        effect.reset()
        expect(pool(effect, 'child').activeStates).toHaveLength(0)
        expect(effect.subEmitterSystem!.reservedParticles).toBe(0)

        step(effect, 0.2)
        effect.dispose()
        expect(effect.children).toHaveLength(0)
        // Disposed effects rebuild on the next update.
        step(effect, 0.2)
        expect(pool(effect, 'child').activeStates).toHaveLength(3)
    })

    it('a disabled template disables its chain', () => {
        const json = emitter('child', { life: 100, duration: 10 })
        json.enabled = false
        const effect = makeEffect([
            emitter('root', {
                count: 2,
                life: 100,
                subEmitters: [{ emitter: 'child', trigger: { type: 'birth' } }],
            }),
            json,
        ])
        step(effect, 0.2)
        expect(pool(effect, 'child').activeStates).toHaveLength(0)
    })

    it('custom particle shaders work on sub-emitter particles', () => {
        const child = emitter('child', { count: 1, life: 100, duration: 10 })
        child.material = 'shd'
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 0.1,
                duration: 0.02,
                timelines: [constant('colorG', 0.5)],
                subEmitters: [
                    {
                        emitter: 'child',
                        trigger: { type: 'death' },
                        inheritColor: true,
                    },
                ],
            }),
            child,
        ])
        step(effect, 0.3)
        const renderer = effect.children[1] as Points
        const attrs = renderer.geometry.attributes
        expect(attrs.particleColor.count).toBe(pool(effect, 'child').capacity)
        const color = attrs.particleColor.array as Float32Array
        expect(color[1]).toBeCloseTo(0.5)
        expect((attrs.particleAge.array as Float32Array)[0]).toBeGreaterThan(0)
    })

    it('all triggers firing in one frame spawn before a kill removes the particle', () => {
        const line = {
            type: 'position',
            axis: 'y',
            op: '<',
            value: -0.1,
        } as const
        const effect = makeEffect([
            emitter('root', {
                count: 1,
                life: 10,
                duration: 0.02,
                timelines: [constant('yVel', -1)],
                subEmitters: [
                    { emitter: 'splash', trigger: line, killParticle: true },
                    { emitter: 'mist', trigger: line },
                ],
            }),
            emitter('splash', { count: 1, life: 100, duration: 10 }),
            emitter('mist', { count: 1, life: 100, duration: 10 }),
        ])
        step(effect, 0.3)
        expect(pool(effect, 'splash').activeStates).toHaveLength(1)
        expect(pool(effect, 'mist').activeStates).toHaveLength(1)
        expect((effect.children[0] as Points).geometry.drawRange.count).toBe(0)
    })
})
