import { parseTimeline } from '../../src'
import { timelineDefaults } from '../../src/model/TimelineModel'

describe('TimelineModel', () => {
    describe('parseTimeline', () => {
        it('should set timeline to Float32Array', () => {
            const parsed = parseTimeline({
                property: '',
                timeline: [1, 2, 3],
            })
            expect(parsed.timeline).toBeInstanceOf(Float32Array)
            expect(parsed.timeline).toEqual(new Float32Array([1, 2, 3]))
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
