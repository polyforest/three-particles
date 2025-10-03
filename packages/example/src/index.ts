import * as THREE from 'three'
import { ParticleEffect, ParticleEffectLoader } from 'three-particles'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

console.log('Hello!')

const camera = new THREE.PerspectiveCamera()
camera.position.set(0, 1, 2)

camera.lookAt(new THREE.Vector3(0, 0.2, 0))

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x111111)
scene.fog = new THREE.Fog(0x111111, 1, 10)

const clock = new THREE.Clock()

const grid = new THREE.GridHelper(20, 20, 0x000000, 0xffffff)
grid.material.opacity = 0.2
grid.material.transparent = true
scene.add(grid)

const canvas = document.querySelector('#mainCanvas') as HTMLCanvasElement

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
})
renderer.setClearColor(0x191919)

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
    const dT = clock.getDelta() // Must be called to get elapsed time.

    controls.update()
    particleEffect?.update(dT)
    renderer.render(scene, camera)
}

clock.start()
renderer.setAnimationLoop(render)
