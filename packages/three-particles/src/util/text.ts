const textDecoder = new TextDecoder()

/**
 * @see TextDecoder.decode
 */
export function decodeText(
    input?: string | ArrayBuffer,
    options?: TextDecodeOptions,
): string {
    if (typeof input === 'string') return input
    return textDecoder.decode(input, options)
}
