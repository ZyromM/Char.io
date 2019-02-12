// @flow

import { HemisphericLight } from "babylonjs";

export const LightManager = {
  lights: {},

  createNew(name: string, target: any, scene: any) {
    // if target 0,1,0 -> meaning aiming the sky
    this.lights[name] = new HemisphericLight(name, target, scene);
  },

  getLight(key: string) {
    if (this.lights) return this.lights[key];
  }
};
