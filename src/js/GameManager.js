export const GameManager = {

    materialManager: null,
    textureManager: null,
    cameraManager: null,
    sceneManager: null,
    renderManager: null,

    materials: {},
    textures: {},
    cameras: null,
    scenes: null,
    renderer: null,

    init(materials, textures, cameras, scenes, render) {

        this.materials = materials;
        this.textures = textures;
        this.cameras = cameras;
        this.scenes = scenes;
        this.renderer = render;

        },

    getManagers(materialManager, textureManager, cameraManager, sceneManager, renderManager) {

        this.materialManager = materialManager;
        this.textureManager = textureManager;
        this.cameraManager = cameraManager;
        this.sceneManager = sceneManager;
        this.renderManager = renderManager;

    },

    update(id, methodId, ...params) {

        if ( id === 'scenes') {

            console.log("fils de deputet eta mere je temerede")
            this.sceneManager[methodId](params);
            this.scenes = this.sceneManager.scenes

        }

    }

};
