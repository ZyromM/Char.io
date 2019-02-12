// @flow

import { Cube } from "./Cube.js";

export const Map = {
  maps: {},

  createNew(
    name: string,
    pos: Array<string>,
    scene: any,
    materialFloor: any,
    materialWall: any
  ) {
    let map = [];

    for (let z = 0; pos[z]; ++z) {
      for (let x = 0; pos[z][x]; ++x) {
        for (let y = 0; y.toString() <= pos[z][x]; ++y) {
          y === 0
            ? map.push(
                Cube.create("", x, y, -z, 1, materialFloor, "procedural", scene)
              )
            : map.push(
                Cube.create("", x, y, -z, 1, materialWall, "procedural", scene)
              );
        }
      }
    }

    this.maps[name] = map;
  },

  getMap(key: string) {
    if (this.maps) return this.maps[key];
  }
};
