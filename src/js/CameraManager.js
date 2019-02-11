import { ArcRotateCamera, Vector3 } from "babylonjs";

export const CameraManager = {
  cameras: null,

  createNew(name, alpha, beta, radius, target, scene, canvas) {
    //add active as parameter
    this.cameras = new ArcRotateCamera(
      name,
      alpha,
      beta,
      radius,
      target,
      scene
    );

    this.camera.setTarget(Vector3.Zero());

    // attach the camera to the canvas
    this.camera.attachControl(canvas, false);

    //this.cameras.position.set(4, 4, 10);
    //this.cameras.rotation.x = 100;
  }

  // setPosition ( x, y, z ) {
  //
  //     this.cameras.position.set( x, y, z )
  //
  // },
  //
  // setRotation ( x, y, z ) {
  //
  //     this.cameras.rotation.set( x, y, z )
  //
  // },
};
