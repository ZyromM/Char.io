import { HemisphericLight } from "babylonjs";

export const LightManager = {
  lights: {},

  createNew(name, target, scene) {
    // if target 0,1,0 -> meaning aiming the sky
    this.lights[name] = new HemisphericLight(name, target, scene);
  }
};
