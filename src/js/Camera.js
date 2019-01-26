import { PerspectiveCamera } from "three";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from './const.js'

export const CameraManager = {

    fov: 85,
    aspect: WINDOW_WIDTH / WINDOW_HEIGHT,
    near: 0.1,
    far: 1000,

    camera: null,

    createNewCamera ( fov, aspect, near, far ) {

        if (fov) this.fov = fov;
        if (aspect) this.aspect = aspect;
        if (near) this.near = near;
        if (far) this.far = far;

        this.camera = new PerspectiveCamera( this.fov, this.aspect, this.near, this.far );

        //DEBUG
        this.camera.position.x = 4;
        this.camera.position.y = 4;
        this.camera.rotation.x = 100;
        //

        console.log("camera: ", this.camera)

    },

    setPosition ( x, y, z ) {

        this.camera.position.set( x, y, z )

    },

    setRotation ( x, y, z ) {

        this.camera.rotation.set( x, y, z )

    },

};
