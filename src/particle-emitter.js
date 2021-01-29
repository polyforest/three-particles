import {
  BufferGeometry,
  DynamicDrawUsage,
  Float32BufferAttribute,
  Points,
  Vector3,
} from 'three';

/** @module particle */

/** @typedef {import('./model').ParticleEmitterVo} ParticleEmitterVo */
/** @typedef {import('three').Material} Material */


/**
 * A ParticleEmitter contains one [Points] object and is responsible for
 * updating its particles.
 *
 * @augments {Points<BufferGeometry, Material>}
 */
export class ParticleEmitter extends Points {

  /**
   * Constructor
   *
   * @param {ParticleEmitterVo} data The model used to construct this emitter.
   */
  constructor(data) {
    super();
    const particleNum = 10;

    this.geometry = new BufferGeometry();

    const vertices = [];
    for (let i = 0; i < particleNum; i++) {
      const x = i * 0.1;
      const y = 5;
      const z = 0;
      vertices.push(x, y, z);
    }
    this._position = new Float32BufferAttribute(vertices, 3);
    this._position.usage = DynamicDrawUsage;
    this.geometry.setAttribute('position',
        this._position);
    this._vertices = vertices;

    /**
     * @type {Material}
     * @override
     */
    this.material = data.material;

    /**
     * @type {number[]}
     * @private
     */
    this.velocities = [];
    // this.geometry.setDrawRange(0, particleNum);

    this._time = 0;

    /**
     * The current spawn position.
     */
    this.spawnPosition = new Vector3();
  }

  /**
   * The current time, in seconds, this emitter has elapsed.
   * This cannot be set directly; use `update`.
   *
   * @type {number}
   * @readonly
   */
  get time() {
    return this._time;
  }

  /**
   * Updates this emitter forward in time. Typically this is only invoked by the
   * particle effect.
   *
   * @param {number} dT The number of seconds to elapse.
   */
  update(dT) {
    this._time += dT;
    // const t = this._time;
    const posArr = /** @type {number[]} */
      (this.geometry.attributes.position.array);
    // const velArr = this.velocities;

    let i = 0;
    while (i < posArr.length) {
      posArr[i + 1] += -0.01;
      if (posArr[i + 1] < 0) {
        posArr[i + 1] = 4;
      }
      i += 3;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.computeBoundingBox();
  }

}
