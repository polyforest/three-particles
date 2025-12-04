import {
    AmbientLight,
    AxesHelper,
    Clock,
    Color,
    DirectionalLight,
    Fog,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    TextureLoader,
    Vector3,
    WebGLRenderer,
} from 'three'
import { ParticleEffect, ParticleEffectLoader } from 'three-particles'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

console.log('Hello!')

const camera = new PerspectiveCamera()
camera.position.set(0, 1, 2)

camera.lookAt(new Vector3(0, 0.2, 0))

const scene = new Scene()
scene.background = new Color(0x111111)
scene.fog = new Fog(0x111111, 1, 10)

const clock = new Clock()

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

// Load the particle effect.
let particleEffect: ParticleEffect | null = null
const loader = new ParticleEffectLoader()

loader
    .loadAsync('./fire.json')
    .then((model) => {
        particleEffect = new ParticleEffect(model)
        scene.add(particleEffect)
    })
    .catch(console.error)

function render() {
    const dT = Math.min(clock.getDelta(), 0.1)
    controls.update()
    particleEffect?.update(dT)
    renderer.render(scene, camera)
}

clock.start()
renderer.setAnimationLoop(render)
