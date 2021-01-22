import {
  BufferGeometry,
  Float32BufferAttribute,
  FloatType,
  Points,
  Texture,
} from 'three';

/**
 * A ParticleEmitter contains one [Points] object and is responsible for
 * updating its particles.
 * @extends {Points<THREE.BufferGeometry, THREE.Material>}
 */
export class ParticleEmitter extends Points {

  /**
   * @param {ParticleEmitterVo} data
   */
  constructor(data) {
    super();
    const particleNum = 10000;

    this.geometry = new BufferGeometry();

    /**
     * @private
     * @type {number[]}
     */
    this.vertices = [];
    for (let i = 0; i < particleNum; i++) {
      const x = Math.random() * 30 - 15;
      const y = Math.random() * 30;
      const z = Math.random() * 30 - 15;
      this.vertices.push(x, y, z);
    }
    this.geometry.setAttribute('position',
        new Float32BufferAttribute(this.vertices, 3));

    /**
     * @type {THREE.Material}
     * @override
     */
    this.material = data.material;

    /**
     * @type number[]
     * @private
     */
    this.velocities = [];
    for (let i = 0; i < particleNum; i++) {
      const x = Math.floor(Math.random() * 6 - 3) * 0.1;
      const y = -0.05;
      const z = Math.floor(Math.random() * 6 - 3) * 0.1;
      this.velocities.push(x, y, z);
    }

    /**
     * The current time, in seconds, this emitter has elapsed.
     * @readonly
     * @type {number}
     */
    this.time = 0;
  }

  /**
   *
   * @param {number} dT The number of seconds to elapse.
   */
  update(dT) {
    this.time += dT;
    const posArr = this.vertices;
    const velArr = this.velocities;

    let i = 0;
    while (i < posArr.length) {
      const vX = velArr[i];
      const vY = velArr[i + 1];
      const vZ = velArr[i + 2];

      const vX2 = Math.sin(this.time * vX) * 0.1;
      const vZ2 = Math.cos(this.time * 1.5 * vZ) * 0.1;
      posArr[i] += vX2;
      posArr[i + 1] += vY;
      posArr[i + 2] += vZ2;
      if (posArr[i + 1] < 0) {
        posArr[i + 1] = 10;
      }
      i += 3;
    }
    this.geometry.attributes.position.needsUpdate = true;
  }

}

/**
 * Draws a radial gradient.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} canvasRadius
 * @param {number} canvasW
 * @param {number} canvasH
 * @private
 */
export function drawRadialGradient(ctx,
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
 * @return {Texture}
 * @private
 */
export function createCircleGradientTexture(textureSize = 64.0) {
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
