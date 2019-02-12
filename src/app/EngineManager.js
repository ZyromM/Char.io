// @flow

import { Engine } from "babylonjs";

export const EngineManager = {
  canvas: {},
  engines: {},

  createNew(name: string, canvasId: string) {
    this.canvas[canvasId] = document.getElementById(canvasId);
    this.engines[name] = new Engine(this.canvas[canvasId], true);
  },

  getEngineObject(name: string, key: string) {
    if (this[name]) return this[name][key];
  }
};
