import { PerspectiveCamera } from "three";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from './const.js'

export const CameraManager = {

    fov: 85,
    aspect: WINDOW_WIDTH / WINDOW_HEIGHT,
    near: 0.1,
    far: 1000,

    cameras: null,

    createNew ( fov, aspect, near, far ) {

        if (fov) this.fov = fov;
        if (aspect) this.aspect = aspect;
        if (near) this.near = near;
        if (far) this.far = far;

        this.cameras = new PerspectiveCamera( this.fov, this.aspect, this.near, this.far );

        this.cameras.position.set(4, 4, 10);
        this.cameras.rotation.x = 100;

    },

    setPosition ( x, y, z ) {

        this.cameras.position.set( x, y, z )

    },

    setRotation ( x, y, z ) {

        this.cameras.rotation.set( x, y, z )

    },

};
