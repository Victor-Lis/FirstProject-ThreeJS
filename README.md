
# FirstProject-ThreeJS

Esse é o meu primeiro projeto utilizando ThreeJS, uma biblioteca que acredito que possa agregar muito aos meus projetos Front-End, então decidi estuda-lá.

Acabei vendo o vídeo [Three.js Tutorial For Absolute Beginners](https://youtu.be/xJAfLdUgdc4?si=YT32kA9EJGvQBDsu) do canal [Wael Yasmina](https://www.youtube.com/@WaelYasmina)


# Desafios

- Entender como a lib funciona;
- Entender a estrutura do projeto;
- Entender como funciona a tridimensionalidade;
- Entender as ferramentas.
# Aprendizados

Por final aprendi algumas coisas interessantes como: 
# Na prática

## Exemplo (Vídeo)

No código abaixo, faço importe das ferramentas utilizadas, crio "renderer" que é o renderizador do projeto e defino como será o posicionamento da câmera e da cena.
### Montando estrutura do projeto
```js
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

```

### Helpers
Os "helpers" são como o próprio nome já indica assisentes para se orientar durante o desenvolvimento do projeto.
```js
// Colocando axesHelper para permitir ver eixos X, Y e Z
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// Adicionando GridHelper Plano
const grid = new THREE.GridHelper(30)
scene.add(grid)

```

### OrbitControls

```js
// Adicionando OrbitControls, para permitir controlar o cenário com o mouse
const orbit = new OrbitControls(camera, renderer.domElement)

// Posicionando a camera e dando update no OrbitControls
camera.position.set(0, 2, 5)
orbit.update()
```

### Figuras

#### Box
```js
/// Box(caixa)
const boxGeometry = new THREE.BoxGeometry() // Forma
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff}) // Material
const box = new THREE.Mesh(boxGeometry, boxMaterial) // Criação do esqueleto: Forma + Material
scene.add(box)
```

#### Plane
```js
/// Plane (Plano - Similar a uma folha)
const planeGeometry = new THREE.PlaneGeometry(30, 30) // Forma
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00, 
    side: THREE.DoubleSide
}) // Material
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane) // Criação do esqueleto: Forma + Material

plane.rotation.x = -0.5 * Math.PI; // Deitando o plano
```

#### Sphere
```js
/// Sphere (Bola)
const sphereGeometry = new THREE.SphereGeometry(4, 50, 50) // Forma
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xfcc00f, 
    // wireframe: true
}) // Material
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial) // Criação do esqueleto: Forma + Material
scene.add(sphere)
```

## Practice

Antes de tudo, já aviso que não irei explicar todos os processos do arquivo "practice.js", pois algumas coisas como imports e os helpers, já expliquei no código acima.

### Camera
Dessa vez posicionei a câmera um pouco mais longe, mais alta e levemente na diagonal. Também impossibilitei que o usuário alterasse essa posição.
```js
camera.position.set(0, 20, 7)
orbit.update()
orbit.enabled = false;
```

### Figuras 

#### Sol 
```js
/// Sun 
const sunGeometry = new THREE.SphereGeometry(1.5, 50, 50)
const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xfcc00f, 
    // wireframe: true
})
const sun = new THREE.Mesh(sunGeometry, sunMaterial)
scene.add(sun)
```

#### Planeta 1
```js
/// Planet 1
const planet1Geometry = new THREE.SphereGeometry(.25, 50, 50)
const planet1Material = new THREE.MeshBasicMaterial({
    color: 0x00ff, 
    // wireframe: true
})
const planet1 = new THREE.Mesh(planet1Geometry, planet1Material)
scene.add(planet1)
```

#### Planeta 2
```js
/// Planet 2
const planet2Geometry = new THREE.SphereGeometry(.5, 50, 50)
const planet2Material = new THREE.MeshBasicMaterial({
    color: 0xff0000, 
    // wireframe: true
})
const planet2 = new THREE.Mesh(planet2Geometry, planet2Material)
scene.add(planet2)
```

#### Planeta 3
```js
/// Planet 3
const planet3Geometry = new THREE.SphereGeometry(.75, 50, 50)
const planet3Material = new THREE.MeshBasicMaterial({
    color: 0x00ff00, 
    // wireframe: true
})
const planet3 = new THREE.Mesh(planet3Geometry, planet3Material)
scene.add(planet3)
```

### Animação
Após algumas pesquisas e estudos, desenvolvi a função abaixo, na qual cada planeta tem sua própria orbita, girando envolta do sol.
```js
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


renderer.setAnimationLoop(animate)
```

### Screenshots - Index

![Index](https://github.com/Victor-Lis/FirstProject-ThreeJS/blob/master/project-images/IndexScreen.png)

### Screenshots - Exercise

![Exercise](https://github.com/Victor-Lis/FirstProject-ThreeJS/blob/master/project-images/ExerciseScreen.png)

![ExerciseControls](https://github.com/Victor-Lis/FirstProject-ThreeJS/blob/master/project-images/ExerciseScreenControls.png)

### Screenshots - Practice

![Practice1](https://github.com/Victor-Lis/FirstProject-ThreeJS/blob/master/project-images/Solar-System.png)

![Practice2](https://github.com/Victor-Lis/FirstProject-ThreeJS/blob/master/project-images/Solar-System2.png)

![PracticeScreen](https://github.com/Victor-Lis/FirstProject-ThreeJS/blob/master/project-images/PracticeScreenControls.png)

## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)
