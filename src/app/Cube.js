// @flow

import { MeshBuilder } from "babylonjs";

export const Cube = {
  //mesh: null,

  create(
    name: string,
    x: number,
    y: number,
    z: number,
    size: number,
    material: any,
    type: string,
    scene: any
  ) {
    switch (type) {
      case "procedural":
        this.mesh = MeshBuilder.CreateBox(name, size, scene);
        this.mesh.material = material;
        this.mesh.position.set(x, y, z);
        break;
    }

    return this.mesh;
  }
};
