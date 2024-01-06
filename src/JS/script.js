import * as THREE from 'three'

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

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

camera.position.set(0, 1, 5)

const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)



function animate(){
    box.rotation.x += 0.01
    box.rotation.y += 0.01

    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)