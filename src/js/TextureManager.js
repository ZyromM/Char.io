import { TextureLoader } from 'three'

export const TextureManager = {

    textures: {},

    createNew( name, path ) {

        this.textures[name]  = new TextureLoader().load( path )

    },

};
