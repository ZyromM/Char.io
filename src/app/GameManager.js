// @flow

export const GameManager = {
  // MANAGERS
  materialManager: null,
  cameraManager: null,
  lightManager: null,
  sceneManager: null,
  engineManager: null,

  // OBJECTS
  materials: {},
  lights: {},
  cameras: {},
  scenes: {},
  engines: {},

  add(id: string, manager: any) {
    switch (id) {
      case "materials":
        this.materialManager = manager;
        this.materials = manager[id];
        break;
      case "cameras":
        this.cameraManager = manager;
        this.cameras = manager[id];
        break;
      case "lights":
        this.lightManager = manager;
        this.lights = manager[id];
        break;
      case "scenes":
        this.sceneManager = manager;
        this.scenes = manager[id];
        break;
      case "engines":
        this.engineManager = manager;
        this.engines = manager[id];
        break;
      default:
        console.log("err: Wrong key!");
        break;
    }
  },

  getGameObject(name: string, key: string): Object {
    if (this[name]) {
      return this[name][key];
    }
  }
};
