import {
    AmbientLight,
    AxesHelper,
    Color,
    DirectionalLight,
    Fog,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    Timer,
    Vector3,
    WebGLRenderer,
} from 'three'
import { ParticleEffect, ParticleEffectLoader } from 'three-particles'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const camera = new PerspectiveCamera()
camera.position.set(0, 1.4, 4.2)

camera.lookAt(new Vector3(0, 0.4, 0))

const scene = new Scene()
scene.background = new Color(0x111111)
scene.fog = new Fog(0x111111, 1, 12)

const grid = new GridHelper(20, 20, 0x000000, 0xffffff)
grid.material.opacity = 0.2
grid.material.transparent = true
scene.add(grid)

scene.add(new AxesHelper(3))

const canvas = document.querySelector('#mainCanvas') as HTMLCanvasElement

const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
})
renderer.setClearColor(0x191919)
renderer.shadowMap.enabled = true

// Lighting
const dirLight = new DirectionalLight(0xffffff, 2)
dirLight.position.set(3, 4, 2)
dirLight.castShadow = true
// Tweak shadow quality and camera bounds to cover our scene area
const s = 5
dirLight.shadow.camera.left = -s
dirLight.shadow.camera.right = s
dirLight.shadow.camera.top = s
dirLight.shadow.camera.bottom = -s
dirLight.shadow.mapSize.set(1024, 1024)
scene.add(dirLight)
scene.add(new AmbientLight(0xffffff, 0.2))

// Ground to receive shadows
const ground = new Mesh(
    new PlaneGeometry(20, 20),
    new MeshStandardMaterial({ color: 0x303030 }),
)
ground.rotation.x = -Math.PI / 2
ground.position.y = -0.001
ground.receiveShadow = true
scene.add(ground)

const controls = new OrbitControls(camera, renderer.domElement)

window.addEventListener('resize', onResize)
onResize()

function onResize() {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
}

// Load the particle effects. fire.json renders as GPU point sprites (the
// PointsMaterial path); mesh.json as instanced cubes (the geometry +
// lit-material path). A ParticleEffect is a THREE.Group, so position it
// like any other scene object.
const effects: ParticleEffect[] = []
const loader = new ParticleEffectLoader()

async function loadEffect(url: string, x: number, z = 0): Promise<void> {
    const model = await loader.loadAsync(url)
    const effect = new ParticleEffect(model)
    effect.position.set(x, 0, z)
    scene.add(effect)
    effects.push(effect)
}

loadEffect('./fire.json', -1.5).catch(console.error)
loadEffect('./mesh.json', 1.5).catch(console.error)
// shader.json: a fragment-mode particle ShaderMaterial (see docs/USAGE.md).
loadEffect('./shader.json', 0).catch(console.error)
// Sub-emitters (chained effects, see docs/USAGE.md): each spark of the
// firework's burst can crackle into its own smaller burst, and waterfall
// drops splash and mist where they cross y < 0.
loadEffect('./firework-chain.json', -3, -4).catch(console.error)
loadEffect('./waterfall.json', 3.5, -1).catch(console.error)

// Playback controls exercising the ParticleEffect lifecycle API.
let paused = false
window.addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) {
        case 'p':
            paused = !paused
            break
        case 'r':
            for (const effect of effects) {
                effect.rewind()
            }
            break
        case 's':
            // Stop emitting; particles already alive finish their lives.
            for (const effect of effects) {
                effect.stop(true)
            }
            break
        case 'x':
            for (const effect of effects) {
                effect.reset()
            }
            break
    }
})

// Timer replaces the r183-deprecated Clock. update() advances its internal
// state once per frame; getDelta() then reports the frame delta in seconds.
const timer = new Timer()
function render(time: DOMHighResTimeStamp) {
    timer.update(time)
    const dT = Math.min(timer.getDelta(), 0.1)
    controls.update()
    if (!paused) {
        for (const effect of effects) {
            effect.update(dT)
        }
    }
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(render)
