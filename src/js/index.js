import * as THREE from 'three'
import { GameManager } from './GameManager.js'
import { SceneManager }
from "./SceneManager.js";
import { MapBuffer } from './Map.js'
import { X_AXIS, exampleMap } from "./const.js"
import {BoxBufferGeometry} from "three";
import {MeshLambertMaterial} from "three";
import {WebGLRenderer, Scene, BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, AmbientLight, DirectionalLight} from "three";
import {CameraManager} from "./CameraManager";
import { TextureManager } from "./TextureManager.js";
import { MaterialManager } from "./MaterialManager.js";
import { RenderManager } from "./RenderManager.js";

let OrbitControls = require('three-orbit-controls')(THREE)


if ( WEBGL.isWebGLAvailable() === false ) {

    document.body.appendChild( WEBGL.getWebGLErrorMessage() );

}

function init() {

    // TEXTURES
    TextureManager.createNew('TxFloor1', '../res/Textures/floor2.jpeg');

    // MATERIALS
    MaterialManager.createNew('MxFloor1', { map: TextureManager.Textures['TxFloor1'] } );

    // RENDER
    RenderManager.createNew( { alpha: true } );

    // SCENE
    SceneManager.createNew();

    // CAMERA
    CameraManager.createNew();

    // GAME
    GameManager.init(MaterialManager.Materials, TextureManager.Textures, CameraManager.cameras, SceneManager.scenes, RenderManager.renderer);
    GameManager.getManagers(MaterialManager, TextureManager, CameraManager, SceneManager, RenderManager);

}

init();

// let renderer = new WebGLRenderer({alpha: true});
// renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
// renderer.setPixelRatio( window.devicePixelRatio );

//SceneManager.createNew();

//CameraManager.createNewCamera();

//CameraManager.cameras.position.z = 10;

MapBuffer.create( exampleMap.map, '#101f69' );

let light = new THREE.AmbientLight( 0x404040, 8 );//8
light.position.set( 0, 10, 0 );

//SceneManager.addToScene( MapBuffer.map, light );
GameManager.update('scenes', 'addToScene', MapBuffer.map, light); ////////////////////////////////////////////////////////////////

//document.body.appendChild(renderer.domElement);

console.log("scene: ", SceneManager.scenes);

//DEBUG

//let texture = new THREE.TextureLoader().load( '../res/Textures/floor2.jpeg' );
//console.log("texture :", texture)

let geometry = new BoxBufferGeometry( 1, 1, 1 );
//let material = new THREE.MeshPhysicalMaterial( { map: texture } );
//material.color.set('#101f69')

//let cube = new Mesh(geometry, material );
let cube = new Mesh(geometry, MaterialManager.Materials['MxFloor1']);
cube.position.set(0, 3, 0);

//SceneManager.addToScene(cube);
GameManager.update('scenes', 'addToScene', cube); ////////////////////////////////////////////////////////////////

//console.log("loader", loader);

// END DEBUG

let gridHelper = new THREE.GridHelper( 1000, 20 );
console.log(gridHelper);

//SceneManager.addToScene(gridHelper);
GameManager.update('scenes', 'addToScene', gridHelper); ////////////////////////////////////////////////////////////////

//let cameraHelper = new THREE.CameraHelper(CameraManager.camera);
//SceneManager.addToScene(cameraHelper);

//GameManager.renderer.render( SceneManager.scenes, CameraManager.cameras );
GameManager.renderer.render( GameManager.scenes, GameManager.cameras );

let controls = new OrbitControls( GameManager.cameras);
controls.addEventListener( 'change', GameManager.renderer );


let animate = function () {

    requestAnimationFrame( animate );
    //CameraManager.camera.matrixAutoUpdate = true;

    //CameraManager.camera.rotation.y += 1
    //console.log("y: ", CameraManager.camera.rotation.y)

    GameManager.renderer.render( GameManager.scenes, GameManager.cameras );
};

//init();
animate();

//window.addEventListener( 'resize', onWindowResize, false );

// function onWindowResize() {
//
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//
//     renderer.setSize( window.innerWidth, window.innerHeight );
//
//     render();
//
// }
