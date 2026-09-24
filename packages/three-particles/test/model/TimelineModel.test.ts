import { parseTimeline } from '../../src'
import { timelineDefaults } from '../../src/model/TimelineModel'

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
