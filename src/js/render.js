import { WebGLRenderer } from 'three'

export const RenderManager = {

    renderer: null,

    setup () {

        this.renderer = new WebGLRenderer();

        this.renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);

        //attach render to DOM
        //document.body.appendChild(this.renderer.domElement);

        },

};
