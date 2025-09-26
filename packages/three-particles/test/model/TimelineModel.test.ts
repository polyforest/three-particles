import { parseTimeline } from '../../src'
import { timelineModelToJson } from '../../src/model/TimelineModel'

describe('TimelineModel', () => {
    describe('parseTimeline', () => {
        it('should set timeline to Float32Array', () => {
            const timeline = {
                timeline: [1, 2, 3],
            }
            const parsed = parseTimeline(timeline)
            expect(parsed.timeline).toBeInstanceOf(Float32Array)
            expect(parsed.timeline).toEqual(new Float32Array([1, 2, 3]))
        })

        it('should parse ranges', () => {
            const timeline = {
                low: {
                    min: 3,
                },
            }
            const parsed = parseTimeline(timeline)
            expect(parsed.low.max).toEqual(3)
            // If high was omitted, use low
            expect(parsed.high.max).toEqual(3)
        })
    })

    describe('timelineModelToJson', () => {
        it('should omit defaults', () => {
            const timeline = parseTimeline({})
            const json = timelineModelToJson(timeline)
            // Note: "high" min defaults to 1 in timelineDefaults, which differs from
            // the generic rangeDefaults (min=0). The serializer uses range defaults,
            // so it will include high.min = 1. This is expected.
            expect(json).toEqual({ high: { min: 1 } })
        })

        it('should include non-defaults and array timeline', () => {
            const timeline = parseTimeline({
                property: 'size',
                timeline: [0, 1, 1, 2],
                useEmitterDuration: true,
                relative: true,
                low: { min: 1, max: 2 },
                high: { min: 2, max: 3 },
            })
            const json = timelineModelToJson(timeline)
            expect(json.property).toBe('size')
            expect(json.timeline).toEqual([0, 1, 1, 2])
            expect(json.useEmitterDuration).toBe(true)
            expect(json.relative).toBe(true)
            expect(json.low).toBeDefined()
            expect(json.high).toBeDefined()
        })
    })
})

import { timelineDefaults } from '../../src/model/TimelineModel'

describe('parseTimeline defaults deep clone', () => {
    it('should deep clone low/high when using defaults', () => {
        const a = parseTimeline({})
        const b = parseTimeline({})
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
