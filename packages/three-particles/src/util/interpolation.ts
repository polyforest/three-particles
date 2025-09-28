import { getInsertionIndex } from './array'
import { closeTo } from './math'

/**
 * Gets the interpolated timeline value for a timeline where numComponents is expected
 * to be 1.
 * @param timeline `[time0, value0, time1, value1, timeN, valueN, ...]`
 * @param time The time value.
 */
export function getTimelineValue(
    timeline: ArrayLike<number>,
    time: number,
): number {
    const stride = 2
    let indexB = getInsertionIndex(timeline, time, stride)
    const indexA = Math.max(0, indexB - stride)
    if (indexB === timeline.length) indexB -= stride
    const timeA = timeline[indexA]
    const timeB = timeline[indexB]

    if (closeTo(timeA, timeB)) {
        return timeline[indexA + 1]
    } else {
        const valueA = timeline[indexA + 1]
        const valueB = timeline[indexB + 1]
        const valueAlpha = (time - timeA) / (timeB - timeA)
        return (valueB - valueA) * valueAlpha + valueA
    }
}

/**
 * Gets the interpolated timeline values for a timeline.
 */
export function getTimelineValues(
    timeline: ArrayLike<number>,
    numComponents: number,
    time: number,
    out: Float32Array,
): void {
    if (timeline.length === 0) {
        out.fill(0, 0, numComponents)
        return
    }
    const stride = numComponents + 1
    let indexB = getInsertionIndex(timeline, time, stride)
    const indexA = Math.max(0, indexB - stride)
    if (indexB === timeline.length) indexB -= stride
    const timeA = timeline[indexA]
    const timeB = timeline[indexB]

    if (closeTo(timeA, timeB)) {
        for (let i = 0; i < numComponents; i++) {
            out[i] = timeline[indexA + i + 1]
        }
    } else {
        for (let i = 0; i < numComponents; i++) {
            const valueA = timeline[indexA + i + 1]
            const valueB = timeline[indexB + i + 1]
            const valueAlpha = (time - timeA) / (timeB - timeA)
            out[i] = (valueB - valueA) * valueAlpha + valueA
        }
    }
}

/**
 * Returns the index within the timeline that is close to [time], within [affordance].
 * If no time is close to a time value, -1 is returned.
 *
 * @param timeline
 * @param numComponents
 * @param time
 * @param affordance The maximum value the time can be distant.
 */
export function getIndexCloseToTime(
    timeline: ArrayLike<number>,
    numComponents: number,
    time: number,
    affordance: number = 0.02,
): number {
    const closestIndex = getIndexClosestToTime(timeline, numComponents, time)
    if (closestIndex === -1) return -1
    const closestTime = timeline[closestIndex]
    return closeTo(time, closestTime, affordance) ? closestIndex : -1
}

export function getIndexClosestToTime(
    timeline: ArrayLike<number>,
    numComponents: number,
    time: number,
): number {
    const stride = numComponents + 1
    const a = getInsertionIndex(timeline, time, stride)
    if (a <= 0) return 0
    const b = a - stride
    const diffA = Math.abs(time - timeline[a])
    const diffB = Math.abs(time - timeline[b])
    return diffA < diffB ? a : b
}
