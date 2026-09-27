import { parseTimeline, additiveCapableProperties } from '../../src'
import { timelineDefaults } from '../../src/model/TimelineModel'
import { particlePropertyUpdaters } from '../../src/state/ParticleState'

describe('TimelineModel', () => {
    describe('parseTimeline', () => {
        it('should set timeline to Float32Array', () => {
            const parsed = parseTimeline({
                property: '',
                timeline: [1, 2, 3, 4],
            })
            expect(parsed.timeline).toBeInstanceOf(Float32Array)
            expect(parsed.timeline).toEqual(new Float32Array([1, 2, 3, 4]))
        })

        it('should parse ranges', () => {
            const parsed = parseTimeline({
                property: '',
                low: {
                    min: 3,
                },
            })
            expect(parsed.low.max).toEqual(3)
            // If high was omitted, use low
            expect(parsed.high.max).toEqual(3)
        })
    })
})

describe('parseTimeline defaults deep clone', () => {
    it('should deep clone low/high when using defaults', () => {
        const a = parseTimeline({ property: '' })
        const b = parseTimeline({ property: '' })
        expect(a.low).not.toBe(b.low)
        expect(a.high).not.toBe(b.high)
        // Should not be the same references as exported defaults
        expect(a.low).not.toBe(timelineDefaults.low as any)
        expect(a.high).not.toBe(timelineDefaults.high as any)
        // Mutate and ensure isolation
        a.low.min = 42
        expect(b.low.min).not.toBe(42)
    })
})

describe('timeline shape validation (TP-6)', () => {
    it('accepts a well-formed stride-2, sorted timeline', () => {
        const parsed = parseTimeline({
            property: 'size',
            timeline: [0, 1, 0.5, 2],
        })
        expect(parsed.timeline).toEqual(new Float32Array([0, 1, 0.5, 2]))
    })

    it('rejects odd-length timelines, naming the unpaired index', () => {
        // The trailing 0.5 has no value pair; downstream this desyncs the
        // time/value stride and yields NaN. Must fail at parse, not render.
        expect(() =>
            parseTimeline({ property: 'size', timeline: [0, 1, 0.5] }),
        ).toThrow(/property 'size'/)
        expect(() =>
            parseTimeline({ property: 'size', timeline: [0, 1, 0.5] }),
        ).toThrow(/index 2/)
    })

    it('rejects non-increasing times, naming the offending indices', () => {
        // Unsorted (and equal) times mis-clamp interpolation downstream.
        expect(() =>
            parseTimeline({ property: 'size', timeline: [0, 1, 0, 2] }),
        ).toThrow(/index 2/)
        expect(() =>
            parseTimeline({ property: 'size', timeline: [0, 1, 0, 2] }),
        ).toThrow(/index 0/)
        expect(() =>
            parseTimeline({ property: 'size', timeline: [0, 1, 0, 2] }),
        ).toThrow(/strictly increasing/)
    })

    it('still accepts timelines with no entries', () => {
        expect(() => parseTimeline({ property: 'size' })).not.toThrow()
        expect(() =>
            parseTimeline({ property: 'size', timeline: [] }),
        ).not.toThrow()
    })

    it('validates color timelines at stride 4 (t, r, g, b)', () => {
        // Well-formed color timeline still parses.
        const parsed = parseTimeline({
            property: 'color',
            timeline: [0, 1, 0, 0, 1, 0, 1, 0],
        })
        expect(parsed.timeline).toEqual(
            new Float32Array([0, 1, 0, 0, 1, 0, 1, 0]),
        )
        // An incomplete trailing color keyframe must fail at parse.
        expect(() =>
            parseTimeline({ property: 'color', timeline: [0, 1, 0, 0, 1, 0] }),
        ).toThrow(/multiple of 4/)
    })
})

describe('timeline mode (additive timelines)', () => {
    it('defaults mode to set when omitted', () => {
        expect(parseTimeline({ property: 'xVel' }).mode).toBe('set')
        expect(parseTimeline({ property: 'xVel', mode: 'set' }).mode).toBe(
            'set',
        )
    })

    it('parses mode add for every additive-capable property', () => {
        for (const property of additiveCapableProperties) {
            const parsed = parseTimeline({
                property,
                mode: 'add',
                timeline: [0, 0, 1, 1],
            })
            expect(parsed.mode).toBe('add')
        }
    })

    it('throws on an unknown mode value', () => {
        expect(() =>
            parseTimeline({
                property: 'xVel',
                mode: 'sum' as never,
                timeline: [0, 0, 1, 1],
            }),
        ).toThrow(/property 'xVel'/)
        expect(() =>
            parseTimeline({
                property: 'xVel',
                mode: 'sum' as never,
                timeline: [0, 0, 1, 1],
            }),
        ).toThrow(/unknown mode 'sum'/)
    })

    it('throws when mode add targets a property outside the additive-capable set', () => {
        // Known-but-unsupported properties must fail at parse: an add mode that
        // silently acted as a SET would flatten layered motion without error.
        for (const property of [
            'x',
            'scale',
            'forwardVel',
            'rotationZVel',
            'color',
            'totallyUnknownProperty',
        ]) {
            expect(() =>
                parseTimeline({
                    property,
                    mode: 'add',
                    timeline: [0, 0, 1, 1],
                }),
            ).toThrow(/mode 'add' is only supported/)
            expect(() =>
                parseTimeline({
                    property,
                    mode: 'add',
                    timeline: [0, 0, 1, 1],
                }),
            ).toThrow(new RegExp(`property '${property}'`))
        }
    })

    it('keeps every additive-capable property inside the updater registry', () => {
        // The model layer's additive list and the state layer's updater registry
        // are separate constants; this pins their sync.
        for (const property of additiveCapableProperties) {
            expect(
                Object.prototype.hasOwnProperty.call(
                    particlePropertyUpdaters,
                    property,
                ),
            ).toBe(true)
        }
    })
})

describe('applyAtSpawn (spawn-only timelines)', () => {
    it('defaults to false when omitted', () => {
        expect(parseTimeline({ property: 'orientationZ' }).applyAtSpawn).toBe(
            false,
        )
        expect(
            parseTimeline({
                property: 'orientationZ',
                applyAtSpawn: false,
            }).applyAtSpawn,
        ).toBe(false)
    })

    it('parses true (and the field rides through the parsed emitter model)', () => {
        expect(
            parseTimeline({
                property: 'orientationZ',
                applyAtSpawn: true,
                timeline: [0, 0],
            }).applyAtSpawn,
        ).toBe(true)
    })
})
