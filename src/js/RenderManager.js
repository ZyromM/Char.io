import { WebGLRenderer } from 'three'

export const RenderManager = {

    renderer: null,

    createNew( params ) {

        this.renderer = params ? new WebGLRenderer( params ) : new WebGLRenderer();

        this.renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
        this.renderer.setPixelRatio( window.devicePixelRatio );

        document.body.appendChild(this.renderer.domElement);

    }

};
