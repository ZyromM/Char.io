// @flow

import { ArcRotateCamera, Vector3 } from "babylonjs";

export const CameraManager = {
  cameras: {},

  createNew(
    name: string,
    alpha: number,
    beta: number,
    radius: number,
    target: any,
    scene: any,
    canvas: any,
    type: string
  ) {
    //add active as parameter

    switch (type) {
      case "ArcRotate":
        this.cameras[name] = new ArcRotateCamera(
          name,
          alpha,
          beta,
          radius,
          target,
          scene
        );
        this.cameras[name].setTarget(Vector3.Zero());
        this.cameras[name].attachControl(canvas, false);
        break;
    }
  },

  getCamera(key: string) {
    if (this.cameras) return this.cameras[key];
  }
};
