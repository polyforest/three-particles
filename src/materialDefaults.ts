import { FloatType, Texture } from 'three'

/**
 * Draws a radial gradient into a canvas context.
 *
 * @param ctx The 2D rendering context.
 * @param canvasRadius The radius of the circle.
 * @param canvasW Width of the canvas (defaults to `canvasRadius * 2`).
 * @param canvasH Height of the canvas (defaults to `canvasRadius * 2`).
 * @private
 */
function drawRadialGradient(
    ctx: CanvasRenderingContext2D,
    canvasRadius: number,
    canvasW: number = canvasRadius * 2,
    canvasH: number = canvasRadius * 2,
): void {
    ctx.save()
    const gradient = ctx.createRadialGradient(
        canvasRadius,
        canvasRadius,
        0,
        canvasRadius,
        canvasRadius,
        canvasRadius,
    )
    gradient.addColorStop(0, 'rgba(255,255,255,1.0)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvasW, canvasH)
    ctx.restore()
}

/**
 * Creates a circle gradient texture.
 *
 * @param textureSize - The diameter of the circle gradient.
 * @returns A newly created Texture. Falls back to a default Texture if `document` is not available.
 * @private
 */
export function createCircleGradientTexture(textureSize = 64): Texture {
    // Fallback for environments without a DOM:
    if (typeof document === 'undefined') {
        return new Texture()
    }

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) {
        // If there's no rendering context, return an empty texture.
        return new Texture()
    }

    canvas.width = textureSize
    canvas.height = textureSize
    const canvasRadius = textureSize / 2

    drawRadialGradient(ctx, canvasRadius)

    const texture = new Texture(canvas)
    texture.type = FloatType
    texture.needsUpdate = true
    return texture
}

/**
 * Module-level variable caching the default radial gradient texture.
 * @private
 */
let _defaultRadial: Texture | null = null

/**
 * Returns the default radial gradient texture (cached).
 *
 * @returns The cached or newly created radial gradient texture.
 */
export function getDefaultRadial(): Texture {
    if (_defaultRadial === null) {
        _defaultRadial = createCircleGradientTexture()
    }
    return _defaultRadial
}
