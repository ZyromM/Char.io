// @flow

import { Scene } from "babylonjs";

export const SceneManager = {
  scenes: {},

  createNew(name: string, engine: any) {
    this.scenes[name] = new Scene(engine);
  },

  getScene(key: string) {
    if (this.scenes) return this.scenes[key];
  }
};
