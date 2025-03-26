import { TimelineModel, valueFromRange } from '../model'
import { getTimelineValue } from '../util/interpolation'

export class PropertyValue {
    low = 0
    high = 0
    diff = 0
    current = 0

    constructor(private readonly timeline: TimelineModel) {
        this.reset()
    }

    /**
     * Resets the given property value's low and high values.
     * Sets `current` to its new `low` value.
     */
    reset(): void {
        this.low = valueFromRange(this.timeline.low)
        this.high = valueFromRange(this.timeline.high)
        if (this.timeline.relative) this.high += this.low
        this.diff = this.high - this.low
        this.current = this.low
    }

    /**
     * Sets the current value to the interpolated value from the given timeline.
     * It's assumed that the timeline has numComponents == 1
     */
    setTime(time: number): void {
        this.current =
            getTimelineValue(this.timeline.timeline, time) * this.diff +
            this.low
    }
}
