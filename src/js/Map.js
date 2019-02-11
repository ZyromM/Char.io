import { Group } from "three";
import { Cube } from "./Cube.js";

export const Map = {
  createNew(pos, materialFloor, materialWall) {
    let map = new Group();
    map.name = "map";

    for (let z = 0; pos[z]; ++z) {
      for (let x = 0; pos[z][x]; ++x) {
        for (let y = 0; y <= pos[z][x]; ++y) {
          //                    y === 0 ? this.map.add(Cube.create(x, y, -z, { color: color })) : this.map.add(Cube.create(x, y, -z, { color: color, texture: texture }));
          y === 0
            ? map.add(Cube.create(x, y, -z, materialFloor))
            : map.add(Cube.create(x, y, -z, materialWall));
        }
      }
    }

    return map;
  }
};
