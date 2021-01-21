import {
  FloatType,
  Geometry,
  Points,
  Texture,
  Vector3,
} from 'three';

/**
 * A ParticleEmitter contains one [Points] object and is responsible for
 * updating its particles.
 * @extends {Points<Geometry, THREE.Material>}
 */
export class ParticleEmitter extends Points {

  /**
   * @param {ParticleEmitterVo} data
   */
  constructor(data) {
    super();
    const particleNum = 10000;

    this.geometry = new Geometry();
    for (let i = 0; i < particleNum; i++) {
      const particle = new Vector3(
        Math.random() * 30 - 15,
        Math.random() * 30,
        Math.random() * 30 - 15,
      );
      this.geometry.vertices.push(particle);
      // const color = new THREE.Color(0xffffff);
      // pointGeometry.colors.push(color);
    }

    /**
     * @type {THREE.Material}
     * @override
     */
    this.material = data.material;

    /**
     * @type Vector3[]
     * @private
     */
    this.velocities = [];
    for (let i = 0; i < particleNum; i++) {
      const x = Math.floor(Math.random() * 6 - 3) * 0.1;
      const y = -0.05;
      const z = Math.floor(Math.random() * 6 - 3) * 0.1;
      const particle = new Vector3(x, y, z);
      this.velocities.push(particle);
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
    const posArr = this.geometry.vertices;
    const velArr = this.velocities;

    posArr.forEach((vertex, i) => {
      const velocity = velArr[i];

      const velX = Math.sin(this.time * velocity.x) * 0.1;
      const velZ = Math.cos(this.time * 1.5 * velocity.z) * 0.1;

      vertex.x += velX;
      vertex.y += velocity.y;
      vertex.z += velZ;

      if (vertex.y < 0) {
        vertex.y = 10;
      }
    });

    this.geometry.verticesNeedUpdate = true;
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
