import { MeshBuilder } from "babylonjs";

export const Cube = {
  mesh: null,

  create(name, x, y, z, size, material, type, scene) {
    switch (type) {
      case "procedural":
        this.mesh = MeshBuilder.CreateBox(name, size, scene);
        this.mesh.material = material;
        this.mesh.position.set(x, y, z)
        break;
    }

    return this.mesh;
  }
};
