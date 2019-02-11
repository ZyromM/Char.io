import { Scene } from "babylonjs";

export const SceneManager = {
  scenes: {},

  createNew(name, engine) {
    this.scenes[name] = new Scene(engine);
  }
};
