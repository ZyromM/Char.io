// @flow

import { PBRMetallicRoughnessMaterial, Texture } from "babylonjs";

export const MaterialManager = {
  materials: {},

  createNew(name: string, texture: string, scene: any) {
    this.materials[name] = new PBRMetallicRoughnessMaterial(name, scene);
    this.materials[name].baseTexture = new Texture(texture);
  },

  getMaterial(key: string) {
    if (this.materials) return this.materials[key];
  }
};
