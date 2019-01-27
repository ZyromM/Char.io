import { GridHelper } from "three";

export const GameManager = {

    // MANAGERS
    materialManager: null,
    textureManager: null,
    cameraManager: null,
    lightManager: null,
    sceneManager: null,
    renderManager: null,

    // OBJECTS
    materials: {},
    textures: {},
    lights: {},
    cameras: null,
    scenes: null,
    renderer: null,

    // HELPERS
    gridHelper: new GridHelper( 1000, 20 ),

    init(materials, textures, cameras, scenes, lights, render) {

        this.materials = materials;
        this.textures = textures;
        this.cameras = cameras;
        this.scenes = scenes;
        this.lights = lights;
        this.renderer = render;

        },

    getManagers(materialManager, textureManager, cameraManager, sceneManager, lightManager, renderManager) {

        this.materialManager = materialManager;
        this.textureManager = textureManager;
        this.cameraManager = cameraManager;
        this.sceneManager = sceneManager;
        this.lightManager = lightManager;
        this.renderManager = renderManager;

    },

    update(id, methodId, ...params) {

        if ( id === 'scenes') {

            this.sceneManager[methodId]( params );
            this.scenes = this.sceneManager.scenes

        }

    }

};
