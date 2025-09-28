export function getInsertionIndex(
    values: ArrayLike<number>,
    value: number,
    stride: number = 1,
    offset: number = 0,
): number {
    let low = 0
    let high = values.length / stride
    while (low < high) {
        const mid = (low + high) >> 1
        if (values[mid * stride + offset] < value) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low * stride
}

export function arrayOf<T>(count: number, factory: (i: number) => T): T[] {
    const arr = new Array<T>(count)
    for (let i = 0; i < count; i++) {
        arr[i] = factory(i)
    }
    return arr
}
