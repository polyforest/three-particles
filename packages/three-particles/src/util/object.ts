/**
 * Returns true if the object is not null or undefined.
 */
export function isNonNil<T>(object: T): object is NonNullable<T> {
    return object != null
}
