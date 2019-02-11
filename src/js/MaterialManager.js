import { PBRMetallicRoughnessMaterial, Texture } from "babylonjs";

export const MaterialManager = {
  materials: {},

  createNew(name, texture, scene) {
    this.materials[name] = new PBRMetallicRoughnessMaterial(name, scene);
    this.materials[name].baseTexture = new Texture(texture);
  }
};
