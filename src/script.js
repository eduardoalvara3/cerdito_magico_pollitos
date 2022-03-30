import './style.css'
import './particles.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'dat.gui'

import runPage from './page.js'

async function run(){



    // loading
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load('/textures/normalMap.jpg');

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    // Materials

    // const material = new THREE.MeshStandardMaterial()
    // material.metalness = 0.2
    // material.roughness = 0.7
    // material.normalMap = normalTexture;
    // material.color = new THREE.Color(0x222222)

    // Objects
    // const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
    // const geometry = new THREE.SphereBufferGeometry(.5, 64, 64);
    let geometry;
    let sphere;
    
    const loader = new GLTFLoader();

    await loader.loadAsync('./cerdito_magico.glb', function (gltf) {
        // console.log(geometry);
        
        
    }).then( r => {
        sphere = r.scene;
        sphere.scale.set(0.4, 0.4, 0.4);
        // sphere.rotation.set(0,0,0);
        // sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere);
        
    });


    // Debug
    // const gui = new dat.GUI()

    // Lights

    const pointLight = new THREE.PointLight(0x89c8bc, 0.01)
    pointLight.position.x = -1.52
    pointLight.position.y = 1.22
    pointLight.position.z = 3.65
    pointLight.intensity = 2.25
    pointLight.distance = 45
    scene.add(pointLight)
    // GUI
    // const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
    // scene.add(pointLightHelper)
    // const light = gui.addFolder('light')
    // light.add(pointLight.position, 'x').min(-6).max(10).step(0.01)
    // light.add(pointLight.position, 'y').min(-3).max(10).step(0.01)
    // light.add(pointLight.position, 'z').min(-3).max(10).step(0.01)
    // light.add(pointLight, 'intensity').min(0).max(10).step(0.01)
    // light.add(pointLight, 'distance').min(0).max(200).step(1)
    // const lightColo = { color: 0x89c8bc }
    // light.addColor(lightColo, 'color').onChange(() => { pointLight.color.set(lightColo.color) })


    const pointLight2 = new THREE.PointLight(0xb9b994, 2.8)
    pointLight2.position.x = 4.3
    pointLight2.position.y = 1.02
    pointLight2.position.z = 0.27
    pointLight2.intensity = 1.59
    scene.add(pointLight2)
    // GUI
    // const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1)
    // scene.add(pointLightHelper2)
    // const light2 = gui.addFolder('light2')
    // light2.add(pointLight2.position, 'x').min(-6).max(6).step(0.01)
    // light2.add(pointLight2.position, 'y').min(-3).max(3).step(0.01)
    // light2.add(pointLight2.position, 'z').min(-3).max(3).step(0.01)
    // light2.add(pointLight2, 'intensity').min(0).max(10).step(0.01)
    // const light2Color = {color: 0xb9b994}
    // light2.addColor(light2Color, 'color').onChange(()=>{pointLight2.color.set(light2Color.color)})


    const pointLight3 = new THREE.PointLight(0x353957, 2.8)
    pointLight3.position.x = 0.06
    pointLight3.position.y = -0.96
    pointLight3.position.z = 0.63
    pointLight3.intensity  = 1.63
    scene.add(pointLight3)
    // GUI
    // const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1)
    // scene.add(pointLightHelper3)
    // const light3 = gui.addFolder('light3')
    // light3.add(pointLight3.position, 'x').min(-6).max(6).step(0.01)
    // light3.add(pointLight3.position, 'y').min(-3).max(3).step(0.01)
    // light3.add(pointLight3.position, 'z').min(-3).max(3).step(0.01)
    // light3.add(pointLight3, 'intensity').min(0).max(10).step(0.01)
    // const light3Color = { color: 0x353957 }
    // light3.addColor(light3Color, 'color').onChange(() => { pointLight3.color.set(light3Color.color) })

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.2, 200)
    camera.position.x = 0
    camera.position.y = 0.3
    camera.position.z = 3
    scene.add(camera)

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: 1
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */

    // mouse


    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX)
        mouseY = (event.clientY - windowHalfY)
    }

    document.addEventListener('mousemove', onDocumentMouseMove)

    // spinmousey 

    const clock = new THREE.Clock()

    // scene.traverse(function (node) {
    //     if (node.geometry) {
    //         node.geometry.computeBoundingSphere();
    //     }
    // });
    let new_pos_step = 1;
    let target_modified = 0;
    const tick = () =>
    {

        targetX = mouseX * .002
        if (targetX == 0 && !target_modified){
            targetX = 1
        }else{
            target_modified = 1
        }
        
        targetY = (mouseY * .01) - 2

        const elapsedTime = clock.getElapsedTime()
        let scroll = document.documentElement.scrollTop;

        let aux = new THREE.Vector2();
        if (scroll > 3
            && renderer.getSize(aux).x > sizes.width / 2
        ) {
            renderer.setSize(
                aux.x - (sizes.width * 0.01),
                aux.y - (sizes.height * 0.01)
            );
        }
        if (scroll < 3
            && renderer.getSize(aux).x < sizes.width
        ) {
            renderer.setSize(
                aux.x + (sizes.width * 0.01),
                aux.y + (sizes.height * 0.01)
            );
        }

        if (sphere.position.y > 0.1 && new_pos_step > 0) {
            new_pos_step = 0.8
        }
        if (sphere.position.y > 0.15 && new_pos_step > 0) {
            new_pos_step = 0.4
        }
        if (sphere.position.y < -0.1 && new_pos_step < 0) {
            new_pos_step = -0.8
        }
        if (sphere.position.y < -0.15 && new_pos_step < 0) {
            new_pos_step = -0.4
        }
        if (sphere.position.y > 0.2){
            new_pos_step = -1
        }
        if (sphere.position.y < -0.2) {
            new_pos_step = 1
        }

        // Update objects
        sphere.position.y = sphere.position.y + (.001 * new_pos_step)
        

        sphere.rotation.y = .5 * (targetX - sphere.rotation.y)
        sphere.rotation.x = .05 * (targetY - sphere.rotation.x)
        sphere.position.z = -.05 * (targetY - sphere.rotation.x)


        // Update Orbital Controls
        // controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()
}
run();
runPage();