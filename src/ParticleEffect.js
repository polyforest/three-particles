import {FloatType, Geometry, Points, PointsMaterial, Texture, Vector3} from "three";

/**
 *
 * @param ctx {CanvasRenderingContext2D}
 * @param canvasRadius {number}
 * @param canvasW {number}
 * @param canvasH {number}
 */
function drawRadialGradation(ctx, canvasRadius, canvasW, canvasH) {
    ctx.save();
    const gradient = ctx.createRadialGradient(canvasRadius, canvasRadius, 0, canvasRadius, canvasRadius, canvasRadius);
    gradient.addColorStop(0, 'rgba(255,255,255,1.0)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasW, canvasH);
    ctx.restore();
}

/**
 *
 * @param textureSize {number}
 * @return {Texture}
 */
function getTexture(textureSize = 64.0) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const diameter = textureSize;
    canvas.width = diameter;
    canvas.height = diameter;
    const canvasRadius = diameter / 2;

    /* gradation circle
    ------------------------ */
    drawRadialGradation(ctx, canvasRadius, canvas.width, canvas.height);

    /* snow crystal
    ------------------------ */
    // drawSnowCrystal(ctx, canvasRadius);

    const texture = new Texture(canvas);
    //texture.minFilter = THREE.NearestFilter;
    texture.type = FloatType;
    texture.needsUpdate = true;
    return texture;
}

export class ParticleEffect {

    constructor() {
        const particleNum = 10000;

        /**
         *
         * @type {Geometry}
         */
        this.geometry = new Geometry();
        for (let i = 0; i < particleNum; i++) {
            const particle = new Vector3(
                Math.random() * 30 - 15,
                Math.random() * 30,
                Math.random() * 30 - 15
            );
            this.geometry.vertices.push(particle);
            // const color = new THREE.Color(0xffffff);
            // pointGeometry.colors.push(color);
        }

        const pointMaterial = new PointsMaterial({
            size: 0.5,
            color: 0xffffff,
            vertexColors: false,
            map: getTexture(),

            // blending: THREE.AdditiveBlending,
            transparent: true,
            // opacity: 0.8,
            fog: true,
            depthTest: true,
            depthWrite: true
        });

        /**
         * @public
         */
        this.velocities = /** @type Vector3[] */ [];
        for (let i = 0; i < particleNum; i++) {
            const x = Math.floor(Math.random() * 6 - 3) * 0.1;
            const y = -0.05;
            const z = Math.floor(Math.random() * 6 - 3) * 0.1;
            const particle = new Vector3(x, y, z);
            this.velocities.push(particle);
        }

        /**
         *
         * @public
         */
        this.points = new Points(this.geometry, pointMaterial);

        this.time = 0;
    }

    /**
     *
     * @param dT {number} The number of seconds to elapse.
     */
    render(dT) {
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

        })

        this.geometry.verticesNeedUpdate = true;
    }
}