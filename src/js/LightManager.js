import { AmbientLight } from "three";

export const LightManager = {
  lights: {},

  createNew(name, ...params) {
    let light = new AmbientLight(params);
    light.position.set(0, 10, 0);

    this.lights[name] = light;
  }
};
