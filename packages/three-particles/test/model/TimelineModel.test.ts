import { sanitizeTimeline } from '../../src'

describe('TimelineModel', () => {
    describe('sanitizeTimeline', () => {
        it('should set timeline to Float32Array', () => {
            const timeline = {
                timeline: [1, 2, 3],
            }
            sanitizeTimeline(timeline)
            expect(timeline.timeline).toBeInstanceOf(Float32Array)
            expect(timeline.timeline).toEqual(new Float32Array([1, 2, 3]))
        })

        it('should sanitize ranges', () => {
            const timeline = {
                low: {
                    min: 3,
                },
            }
            sanitizeTimeline(timeline)
            expect(timeline.low.max).toEqual(3)
            // If high was omitted, use low
            expect(timeline.high.max).toEqual(3)
        })
    })
})
