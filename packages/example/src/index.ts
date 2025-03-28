import * as THREE from 'three'
import { loadParticleEffect, ParticleEffect } from 'three-particles'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
console.log('Hello!')

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.25,
    100,
)
camera.position.set(-5, 3, 10)
camera.lookAt(new THREE.Vector3(0, 2, 0))

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x111111)
scene.fog = new THREE.Fog(0x111111, 20, 100)

const clock = new THREE.Clock()

// Lights

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444)
hemiLight.position.set(0, 20, 0)
scene.add(hemiLight)

const dirLight = new THREE.DirectionalLight(0xffffff)
dirLight.position.set(0, 20, 10)
scene.add(dirLight)

// Ground

const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2000, 2000),
    new THREE.MeshPhongMaterial({
        color: 0x181818,
        depthWrite: false,
    }),
)
mesh.rotation.x = -Math.PI / 2
scene.add(mesh)

const grid = new THREE.GridHelper(200, 40, 0x000000, 0xffffff)
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
loadParticleEffect('./fire.json')
    .then((model) => {
        particleEffect = new ParticleEffect(model)
        scene.add(particleEffect)
    })
    .catch(console.error)

function render() {
    const dT = clock.getDelta() // Must be called in order to get elapsed time.

    controls.update()

    particleEffect?.update(dT)
    renderer.render(scene, camera)
}

clock.start()
renderer.setAnimationLoop(render)
