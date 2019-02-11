import { Engine } from "babylonjs";

export const EngineManager = {
  canvas: {},
  engines: {},

  createNew(name, canvasId) {
    this.canvas[canvasId] = document.getElementById(canvasId);
    this.engines[name] = new Engine(this.canvas[canvasId], true);
  }
};
