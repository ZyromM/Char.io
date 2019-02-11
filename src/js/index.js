import { GameManager } from "./GameManager.js";
import { SceneManager } from "./SceneManager.js";
import { CameraManager } from "./CameraManager";
import { TextureManager } from "./TextureManager.js";
import { MaterialManager } from "./MaterialManager.js";
import { RenderManager } from "./RenderManager.js";
import { LightManager } from "./LightManager";
import * as BABYLON from "babylonjs";

// window.addEventListener("DOMContentLoaded", function() {
//   let canvas = document.getElementById("renderCanvas");
//   let engine = new BABYLON.Engine(canvas, true);
//
//   function createAScene() {
//     // SCENE
//     SceneManager.createNew(engine);
//
//     // MATERIALS
//     //MaterialManager.createNew('MxFloor1', { map: TextureManager.textures['TxFloor1'] } );
//     //MaterialManager.createNew('MxWall1', { map: TextureManager.textures['TxWall1'] } );
//     MaterialManager.createNew(
//       "MxFloor1",
//       "../res/Textures/floor.jpg",
//       SceneManager.scenes
//     );
//     MaterialManager.createNew(
//       "MxWall1",
//       "../res/Textures/wall.jpeg",
//       SceneManager.scenes
//     );
//
//     // TEXTURES
//     //TextureManager.createNew('TxFloor1', '../res/Textures/floor.jpg');
//     //TextureManager.createNew('TxWall1', '../res/Textures/wall.jpeg');
//
//     // RENDER
//     //RenderManager.createNew( { alpha: true } );
//
//     // CAMERA // new BABYLON.Vector3.Zero()
//     CameraManager.createNew(
//       "camera1",
//       Math.PI,
//       Math.PI / 2.0,
//       20,
//       new BABYLON.Vector3(0, 0, 0),
//       SceneManager.scenes
//     );
//
//     // LIGHTS
//     //LightManager.createNew("main", 0x404040, 8);
//     var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), SceneManager.scenes);
//
//     // GAME
//     //GameManager.init(MaterialManager.materials, TextureManager.textures, CameraManager.cameras, SceneManager.scenes, LightManager.lights, RenderManager.renderer);
//     //GameManager.getManagers(MaterialManager, TextureManager, CameraManager, SceneManager, LightManager, RenderManager);
//
//     //TESTING
//     //var material = new BABYLON.StandardMaterial('',scene);
//     var box = BABYLON.Mesh.CreateBox("box", 1, SceneManager.scenes);
//     box.material = MaterialManager.materials["MxWall1"];
//     box.position.y = 2;
//   }
//
//   createAScene();
//
//   // run the render loop
//   engine.runRenderLoop(function() {
//     SceneManager.scenes.render();
//   });
//
//   // the canvas/window resize event handler
//   // window.addEventListener("resize", function() {
//   //   engine.resize();
//   // });
// });

//init();

//
// GameManager.update('scenes', 'addToScene', Map.createNew( exampleMap.map, GameManager.materials['MxFloor1'], GameManager.materials['MxWall1'] ), GameManager.gridHelper );
// GameManager.update('scenes', 'addObjectToScene', GameManager.lights);
// GameManager.renderer.render( GameManager.scenes, GameManager.cameras );
//
// let controls = new OrbitControls( GameManager.cameras);
// controls.addEventListener( 'change', GameManager.renderer );
//
// let animate = function () {
//
//     requestAnimationFrame( animate );
//     GameManager.renderer.render( GameManager.scenes, GameManager.cameras );
// };
//
// animate();

// console.log("bite")
//


// window.addEventListener('DOMContentLoaded', function() {
//     // get the canvas DOM element
//     var canvas = document.getElementById('renderCanvas');
//
//     // load the 3D engine
//     var engine = new BABYLON.Engine(canvas, true);
//
//     // createScene function that creates and return the scene
//     var createScene = function () {
//         // create a basic BJS Scene object
//         var scene = new BABYLON.Scene(engine);
//
//         // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
//         var camera = new BABYLON.ArcRotateCamera('camera1', Math.PI, Math.PI / 2.0, 20, new BABYLON.Vector3(0, 0, 0), scene);
//
//         //TESTING
//         var material = new BABYLON.StandardMaterial('',scene);
//         //var material = new BABYLON.PBRMetallicRoughnessMaterial('yo', scene);
//         //material.baseTexture = new BABYLON.Texture(texture);
//         var box = BABYLON.Mesh.CreateBox("sphere1", 5, scene);
//         box.material = material
//         box.position.y = 2
//
//
//         // target the camera to scene origin
//         camera.setTarget(BABYLON.Vector3.Zero());
//
//         // attach the camera to the canvas
//         camera.attachControl(canvas, false);
//
//         // create a basic light, aiming 0,1,0 - meaning, to the sky
//         var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
//
//         // create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
//         var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
//
//         // move the sphere upward 1/2 of its height
//         sphere.position.y = 1;
//
//         // create a built-in "ground" shape;
//         var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
//
//         // return the created scene
//         return scene;
//     }
//
//     // call the createScene function
//     var scene = createScene();
//
//     // run the render loop
//     engine.runRenderLoop(function () {
//         scene.render();
//     });
//
//     // the canvas/window resize event handler
//     window.addEventListener('resize', function () {
//         engine.resize();
//     });
// });
