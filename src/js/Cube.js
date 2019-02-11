import {
  BoxBufferGeometry,
  Mesh,
  MeshLambertMaterial,
  MeshPhysicalMaterial
} from "three";

export const Cube = {
  width: 1,
  height: 1,
  depth: 1,

  geometry: new BoxBufferGeometry(1, 1, 1),
  mesh: null,

  create(x, y, z, material, ...params) {
    if (params.width) this.width = params.width;
    if (params.height) this.height = params.height;
    if (params.depth) this.depth = params.depth;
    if (params.color) this.material.color.set(params.color);

    this.mesh = new Mesh(this.geometry, material);

    this.mesh.position.set(x, y, z);

    return this.mesh;
  }
};
