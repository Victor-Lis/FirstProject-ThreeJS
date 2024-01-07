import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'

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
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// Adicionando GridHelper Plano
const grid = new THREE.GridHelper(30)
scene.add(grid)

// Posicionando a camera e dando update no OrbitControls
camera.position.set(0, 2, 5)
orbit.update()

// Figuras

/// Box(caixa)
const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

const gui = new dat.GUI() // Criando a Class

// Options, valroes a serem alterados
const options = {
    boxColor: '#0000ff',
    wireframe: false,
}

// Alterando cor (gui.addColor)
gui.addColor(options, 'boxColor').onChange(function(e){
    box.material.color.set(e)
})

// Alterando wireframe (gui.add)
gui.add(options, 'wireframe').onChange(function(e){
    box.material.wireframe = e
})

/// Plane (Plano - Similar a uma folha)

const planeGeometry = new THREE.PlaneGeometry(30, 30)
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00, 
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane)

//// Alterando a posição (por padrão vem de pé, agora fica deitado)
plane.rotation.x = -0.5 * Math.PI;

/// Sphere (Bola)
const sphereGeometry = new THREE.SphereGeometry(4, 50, 50)
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xfcc00f, 
    // wireframe: true
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

//// Redefinindo eixos X, Y e Z
sphere.position.set(-10, 10, 0)

/// Animação para girar a box
let speed = 0.01;
let step = 0;

function animate(){
    box.rotation.x += 0.01
    box.rotation.y += 0.01

    step += speed;
    sphere.position.y = (10 * Math.abs(Math.sin(step))) + 4.15
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)