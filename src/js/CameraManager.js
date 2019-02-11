import { ArcRotateCamera, Vector3 } from "babylonjs";

export const CameraManager = {
  cameras: {},

  createNew(name, alpha, beta, radius, target, scene, canvas, type) {
    //add active as parameter

    switch (type) {
      case "ArcRotate":
        console.log("oui");
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
  }
};
