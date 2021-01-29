import {
  AdditiveBlending,
  Color,
  FloatType,
  ShaderMaterial,
  Texture,
} from 'three';

/** @module */

/**
 * Draws a radial gradient.
 *
 * @param {CanvasRenderingContext2D} ctx The rendering context.
 * @param {number} canvasRadius The radius of the circle.
 * @param {number} [canvasW] The width of the canvas.
 * @param {number} [canvasH] The height of the canvas.
 * @private
 */
function drawRadialGradient(ctx,
  canvasRadius,
  canvasW = canvasRadius * 2,
  canvasH = canvasRadius * 2) {
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
 *
 * @param {number} textureSize The diameter of the circle gradient.
 * @returns {Texture} The newly created texture.
 * @private
 */
export function createCircleGradientTexture(textureSize = 64.0) {
  if (typeof (document) === 'undefined') return new Texture(); // NodeJS
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const diameter = textureSize;
  canvas.width = diameter;
  canvas.height = diameter;
  const canvasRadius = diameter / 2;

  drawRadialGradient(ctx, canvasRadius);

  const texture = new Texture(canvas);
  texture.type = FloatType;
  texture.needsUpdate = true;
  return texture;
}

/**
 * @type {?Texture}
 * @private
 */
let _defaultRadial = null;

/**
 * Returns the default radial gradient.
 *
 * @returns {Texture} The cached or newly created circle gradient texture.
 */
export function getDefaultRadial() {
  if (_defaultRadial === null) _defaultRadial = createCircleGradientTexture();
  return _defaultRadial;
}

/**
 * @type {?import('three').Material}
 * @private
 */
let _defaultMaterial = null;

const defaultVertexShader = `
attribute float size;
attribute vec3 color;

varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const defaultFragmentShader = `
uniform vec3 tint;
uniform sampler2D pointTexture;

varying vec3 vColor;

void main() {

  gl_FragColor = vec4(tint * vColor, 1.0);
  gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);

}

`;


/**
 * @returns {import('three').Material} Returns the default material for a
 * particle effect.
 */
export function getDefaultMaterial() {
  if (_defaultMaterial === null) {
    const m = new ShaderMaterial({
      uniforms: {
        tint: {value: new Color(0xffffff)},
        pointTexture: {value: getDefaultRadial()},
      },
      vertexShader: defaultVertexShader,
      fragmentShader: defaultFragmentShader,
      blending: AdditiveBlending,
      depthTest: false,
      transparent: true,
    });
    m.defaultAttributeValues = {
      'color': [1, 1, 1],
      'size': [13],
    };
    _defaultMaterial = m;
  }
  return _defaultMaterial;
}
