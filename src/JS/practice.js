import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Criação do cenário

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75, // fov
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near
    1000, // fear
)

// Adicionando OrbitControls, para permitir controlar o cenário com o mouse
const orbit = new OrbitControls(camera, renderer.domElement)

// Colocando axesHelper para permitir ver eixos X, Y e Z
// const axesHelper = new THREE.AxesHelper(5) - Desabilitado na versão final
// scene.add(axesHelper) - Desabilitado na versão final

// Adicionando GridHelper Plano
// const grid = new THREE.GridHelper(25, 25) - Desabilitado na versão final
// scene.add(grid) - Desabilitado na versão final

// Posicionando a camera e dando update no OrbitControls
camera.position.set(20, 6, -2.05)
orbit.update()
orbit.enabled = false; // Permitir ou não usuário alterar posição

// Figuras

/// Sun 
const sunGeometry = new THREE.SphereGeometry(1.5, 100, 100)
const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xfcc00f, 
    // wireframe: true
})
const sun = new THREE.Mesh(sunGeometry, sunMaterial)
scene.add(sun)

/// Planet 1
const planet1Geometry = new THREE.SphereGeometry(.25, 50, 50)
const planet1Material = new THREE.MeshBasicMaterial({
    color: 0x00ff, 
    // wireframe: true
})
const planet1 = new THREE.Mesh(planet1Geometry, planet1Material)
scene.add(planet1)

/// Planet 2
const planet2Geometry = new THREE.SphereGeometry(.5, 50, 50)
const planet2Material = new THREE.MeshBasicMaterial({
    color: 0xff0000, 
    // wireframe: true
})
const planet2 = new THREE.Mesh(planet2Geometry, planet2Material)
scene.add(planet2)

/// Planet 3
const planet3Geometry = new THREE.SphereGeometry(.75, 50, 50)
const planet3Material = new THREE.MeshBasicMaterial({
    color: 0x00ff00, 
    // wireframe: true
})
const planet3 = new THREE.Mesh(planet3Geometry, planet3Material)
scene.add(planet3)

function animate() {
    // Orbit in a circular path around the sun on the XZ plane
    planet1.position.x = 4 * Math.cos(Date.now() * 0.003);  // Adjust radius as needed
    planet1.position.z = 4 * Math.sin(Date.now() * 0.003);

    planet2.position.x = 8 * Math.cos(Date.now() * 0.002);  // Adjust radius as needed
    planet2.position.z = 8 * Math.sin(Date.now() * 0.002);

    planet3.position.x = 12 * Math.cos(Date.now() * 0.001);  // Adjust radius as needed
    planet3.position.z = 12 * Math.sin(Date.now() * 0.001);

    renderer.render(scene, camera);
}

setTimeout(() => {
    orbit.enabled = true;
}, 3600)

renderer.setAnimationLoop(animate)