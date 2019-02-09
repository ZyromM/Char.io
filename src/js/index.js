import * as THREE from 'three'
import { GameManager } from './GameManager.js'
import { SceneManager } from "./SceneManager.js";
import { Map } from './Map.js'
import { exampleMap } from "./const.js"
import {CameraManager} from "./CameraManager";
import { TextureManager } from "./TextureManager.js";
import { MaterialManager } from "./MaterialManager.js";
import { RenderManager } from "./RenderManager.js";
import { LightManager } from "./LightManager";

let OrbitControls = require('three-orbit-controls')(THREE);
let THREE2 = window.THREE = require('three');
require('three/examples/js/loaders/GLTFLoader');

if ( WEBGL.isWebGLAvailable() === false ) {

    document.body.appendChild( WEBGL.getWebGLErrorMessage() );

}

function init() {

    // TEXTURES
    TextureManager.createNew('TxFloor1', '../res/Textures/floor.jpg');
    TextureManager.createNew('TxWall1', '../res/Textures/wall.jpeg');

    // MATERIALS
    MaterialManager.createNew('MxFloor1', { map: TextureManager.textures['TxFloor1'] } );
    MaterialManager.createNew('MxWall1', { map: TextureManager.textures['TxWall1'] } );

    // RENDER
    RenderManager.createNew( { alpha: true } );

    // SCENE
    SceneManager.createNew();

    // CAMERA
    CameraManager.createNew();

    // LIGHTS
    LightManager.createNew( 'main', 0x404040, 8 );

    // GAME
    GameManager.init(MaterialManager.materials, TextureManager.textures, CameraManager.cameras, SceneManager.scenes, LightManager.lights, RenderManager.renderer);
    GameManager.getManagers(MaterialManager, TextureManager, CameraManager, SceneManager, LightManager, RenderManager);

}

init();

// LOAD CHARACTER

let loader = new THREE2.GLTFLoader();
var obj = null;

loader.load( '../res/Models/Soldier/scene.gltf', function ( object ) {

    obj = object.scene;
    console.log("objects", object)
    GameManager.update('scenes', 'addObjectToScene', object.scene.children );

    //console.log("obj inside: ", object.scene.children )
    //console.log("obj: ", obj)

} );

console.log("obj: ", obj);

//ANIMATION

let mixer = new THREE.AnimationMixer( obj );
let clips = obj.animations;

function update () {
    mixer.update( 1000 );
}

console.log("clip :", clips)

let clip = THREE.AnimationClip.findByName( clips, 'dance' );
let action = mixer.clipAction( clip );

action.play();

// Play all animations
clips.forEach( function ( clip ) {
    mixer.clipAction( clip ).play();
} );

GameManager.update('scenes', 'addToScene', Map.createNew( exampleMap.map, GameManager.materials['MxFloor1'], GameManager.materials['MxWall1'] ), GameManager.gridHelper );
GameManager.update('scenes', 'addObjectToScene', GameManager.lights);
GameManager.renderer.render( GameManager.scenes, GameManager.cameras );

let controls = new OrbitControls( GameManager.cameras);
controls.addEventListener( 'change', GameManager.renderer );

let animate = function () {

    requestAnimationFrame( animate );
    GameManager.renderer.render( GameManager.scenes, GameManager.cameras );
};

animate();
