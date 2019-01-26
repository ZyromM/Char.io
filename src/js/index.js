import * as THREE from 'three'
import { RenderManager } from './render.js'
import { SceneManager }
from "./Scene.js";
import { MapBuffer } from './Map.js'
import { X_AXIS, exampleMap } from "./const.js"
import {BoxBufferGeometry} from "three";
import {MeshLambertMaterial} from "three";
import {WebGLRenderer, Scene, BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, AmbientLight, DirectionalLight} from "three";
import {CameraManager} from "./Camera";

if ( WEBGL.isWebGLAvailable() === false ) {

    document.body.appendChild( WEBGL.getWebGLErrorMessage() );

}

//RenderManager.setup();

let renderer = new WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
renderer.setPixelRatio( window.devicePixelRatio );

SceneManager.createNewScene();

CameraManager.createNewCamera();

CameraManager.camera.position.z = 10;

MapBuffer.create( exampleMap.map, '#101f69' );

let light = new THREE.AmbientLight( 0x404040, 1 );
light.position.set( 0, 10, 0 );

SceneManager.addToScene( MapBuffer.map, light );

document.body.appendChild(renderer.domElement);

console.log("scene: ", SceneManager.scene);

//DEBUG

var texture = new THREE.TextureLoader().load( '../res/Textures/floor.jpg' );
console.log("texture :", texture)

let geometry = new BoxBufferGeometry( 1, 1, 1 );
let material = new MeshLambertMaterial( { map: texture } );
//material.color.set('#101f69')

let cube = new Mesh(geometry, material);
cube.position.set(0, 3, 0)
SceneManager.addToScene(cube);
//console.log("loader", loader);

// END DEBUG

let gridHelper = new THREE.GridHelper( 1000, 20 );
console.log(gridHelper);
SceneManager.addToScene(gridHelper);
//let cameraHelper = new THREE.CameraHelper(CameraManager.camera);
//SceneManager.addToScene(cameraHelper);

renderer.render( SceneManager.scene, CameraManager.camera );

let animate = function () {

    requestAnimationFrame( animate );
    //CameraManager.camera.matrixAutoUpdate = true;

    //CameraManager.camera.rotation.y += 1
    //console.log("y: ", CameraManager.camera.rotation.y)

    renderer.render( SceneManager.scene, CameraManager.camera );
};

animate();
