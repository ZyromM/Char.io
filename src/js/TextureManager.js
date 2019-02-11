import { Texture } from "babylonjs";

export const TextureManager = {
  textures: {},

  createNew(name, path) {
    this.textures[name] = new Texture(path);
  }
};
