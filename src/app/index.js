// @flow
import * as BABYLON from "babylonjs";
import { GameManager } from "./GameManager";
import { SceneManager } from "./SceneManager";
import { CameraManager } from "./CameraManager";
import { MaterialManager } from "./MaterialManager";
import { EngineManager } from "./EngineManager";
import { LightManager } from "./LightManager";
import { exampleMap } from "./const";
import { Map } from "./Map";

window.addEventListener("DOMContentLoaded", function() {
  let createMainScene = () => {
    // RENDER
    EngineManager.createNew("ExMain", "renderCanvas");

    console.log("Engines: ", EngineManager.engines);
    console.log("Canvas: ", EngineManager.canvas);

    // SCENES
    SceneManager.createNew(
      "SxMain",
      EngineManager.getEngineObject("engines", "ExMain")
    );

    console.log("Scenes: ", SceneManager.scenes);

    // CAMERAS
    CameraManager.createNew(
      "CxCamera1",
      Math.PI,
      Math.PI / 2.0,
      20,
      new BABYLON.Vector3(0, 0, 0),
      SceneManager.getScene("SxMain"),
      EngineManager.getEngineObject("canvas", "renderCanvas"),
      "ArcRotate"
    );

    console.log("Cameras: ", CameraManager.cameras);

    // MATERIALS
    MaterialManager.createNew(
      "MxFloor1",
      "./Textures/floor.jpg",
      SceneManager.getScene("SxMain")
    );

    MaterialManager.createNew(
      "MxWall1",
      "./Textures/wall.jpeg",
      SceneManager.getScene("SxMain")
    );

    console.log("Materials: ", MaterialManager.materials);

    // LIGHTS
    LightManager.createNew(
      "LxMain",
      new BABYLON.Vector3(0, 1, 0),
      SceneManager.getScene("SxMain")
    );

    // MAP
    Map.createNew(
      "MxMain",
      exampleMap.map,
      SceneManager.getScene("SxMain"),
      MaterialManager.getMaterial("MxFloor1"),
      MaterialManager.getMaterial("MxWall1")
    );

    // // TEsting animation
    // var dude;
    // var skeleton;
    // BABYLON.SceneLoader.ImportMesh("", "https://cdn.rawgit.com/marshall-hunts/game-assets/master/", "tronx.gltf", scene, function (newMeshes, particleSystems, skeletons) {
    //   dude = newMeshes[0];
    //
    //   skeleton = skeletons[0];
    //   //	console.log(skeleton.bones)
    //   dude.rotation.y = Math.PI;
    //   // dude.scaling = new BABYLON.Vector3(0.5,0.5,0.5);
    //   dude.position = new BABYLON.Vector3(0, 2, 0);
    //   // skeleton.position = new BABYLON.Vector3(0, 0, 0);
    //   // skeleton.scaling = new BABYLON.Vector3(0.02,0.02,0.02);
    //   dude.rotation.y = Math.PI*2;
    //   //end

    console.log("map : ", Map.getMap("MxMain"));

    // GAME
    GameManager.add("materials", MaterialManager);
    GameManager.add("cameras", CameraManager);
    GameManager.add("lights", LightManager);
    GameManager.add("scenes", SceneManager);
    GameManager.add("engines", EngineManager);
  };

  createMainScene();

  GameManager.getGameObject("engines", "ExMain").runRenderLoop(() => {
    GameManager.getGameObject("scenes", "SxMain").render();
  });

  // the canvas/window resize event handler
  //window.addEventListener('resize', function () {
  //    engine.resize();
  //});
});
