import {
  FloatType,
  Texture,
} from 'three';

/**
 * Draws a radial gradient.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} canvasRadius
 * @param {number} canvasW
 * @param {number} canvasH
 * @private
 */
function drawRadialGradient(ctx,
  canvasRadius,
  canvasW,
  canvasH) {
  ctx.save();
  const gradient = ctx.createRadialGradient(canvasRadius, canvasRadius, 0,
    canvasRadius, canvasRadius, canvasRadius);
  gradient.addColorStop(0, 'rgba(255,255,255,1.0)');
  gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvasW, canvasH);
  ctx.restore();
}

/**
 * Creates a circle gradient texture.
 * @param {number} textureSize The diameter of the circle gradient.
 * @return {THREE.Texture}
 * @private
 */
export function createCircleGradientTexture(textureSize = 64.0) {
  if (typeof(document) === 'undefined') return new Texture(); // NodeJS
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const diameter = textureSize;
  canvas.width = diameter;
  canvas.height = diameter;
  const canvasRadius = diameter / 2;

  drawRadialGradient(ctx, canvasRadius, canvas.width, canvas.height);

  const texture = new Texture(canvas);
  texture.type = FloatType;
  texture.needsUpdate = true;
  return texture;
}

/**
 * @type {?Texture}
 */
let _defaultRadial = null;

/**
 * Returns the default radial gradient.
 * @return {Texture}
 */
export function getDefaultRadial() {
  if (_defaultRadial === null) _defaultRadial = createCircleGradientTexture();
  return _defaultRadial;
}
