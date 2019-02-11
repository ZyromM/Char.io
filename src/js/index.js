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
    SceneManager.createNew("SxMain", EngineManager.engines["ExMain"]);

    console.log("Scenes: ", SceneManager.scenes);

    // CAMERAS
    CameraManager.createNew(
      "CxCamera1",
      Math.PI,
      Math.PI / 2.0,
      20,
      new BABYLON.Vector3(0, 0, 0),
      SceneManager.scenes["SxMain"],
      EngineManager.canvas["renderCanvas"],
      "ArcRotate"
    );

    console.log("Cameras: ", CameraManager.cameras);

    // MATERIALS
    MaterialManager.createNew(
      "MxFloor1",
      "./Textures/floor.jpg",
      SceneManager.scenes["SxMain"]
    );

    MaterialManager.createNew(
      "MxWall1",
      "./Textures/wall.jpeg",
      SceneManager.scenes["SxMain"]
    );

    console.log("Materials: ", MaterialManager.materials);

    // LIGHTS
    LightManager.createNew(
      "LxMain",
      new BABYLON.Vector3(0, 1, 0),
      SceneManager.scenes["SxMain"]
    );

    // Testing
    // var box = BABYLON.Mesh.CreateBox(
    //   "sphere1",
    //   5,
    //   SceneManager.scenes["SxMain"]
    // );
    // box.material = MaterialManager.materials["MxFloor1"];
    // box.position.y = 2;
    // console.log("cube : ", box);
    // // create a built-in "ground" shape;
    // var ground = BABYLON.Mesh.CreateGround(
    //   "ground1",
    //   6,
    //   6,
    //   2,
    //   SceneManager.scenes["SxMain"]
    // );
    // End Testing

    // MAP
    Map.createNew(
      "MxMain",
      exampleMap.map,
      SceneManager.scenes["SxMain"],
      MaterialManager.materials["MxFloor1"],
      MaterialManager.materials["MxWall1"]
    );

    console.log("map : ", Map.maps["MxMain"]);

    // GAME
    GameManager.add("materials", MaterialManager);
    GameManager.add("cameras", CameraManager);
    GameManager.add("lights", LightManager);
    GameManager.add("scenes", SceneManager);
    GameManager.add("engines", EngineManager);
  };

  createMainScene();

  GameManager.engines["ExMain"].runRenderLoop(() => {
    GameManager.scenes["SxMain"].render();
  });

  // the canvas/window resize event handler
  //window.addEventListener('resize', function () {
  //    engine.resize();
  //});
});
