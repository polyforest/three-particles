import {
  BufferGeometry,
  DynamicDrawUsage,
  Float32BufferAttribute,
  Points,
} from 'three';

/** @typedef {import('./model').ParticleEmitterVo} ParticleEmitterVo */

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
    const particleNum = 10;

    this.geometry = new BufferGeometry();
    this.geometry.computeBoundingSphere();
    this.geometry.boundingSphere.radius = 1;


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
     * @type {THREE.Material}
     * @override
     */
    this.material = data.material;

    // const pM = /** @type THREE.PointsMaterial */ (this.material);
    // pM.size = 0.2;
    // pM.depthWrite = true;
    // pM.depthTest = false;
    // pM.transparent = true;
    // pM.needsUpdate = true;

    /**
     * @type number[]
     * @private
     */
    this.velocities = [];
    // this.geometry.setDrawRange(0, particleNum);

    this._time = 0;
  }

  /**
   * The current time, in seconds, this emitter has elapsed.
   * @type {number}
   * @readonly
   */
  get time() {
    return this._time;
  }

  /**
   *
   * @param {number} dT The number of seconds to elapse.
   */
  update(dT) {
    this._time += dT;
    // const t = this._time;
    const posArr = /** @type Array<number> */
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
  }

}
