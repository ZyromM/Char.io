import { TextureLoader } from 'three'

export const TextureManager = {

    // Properties
    Textures: {},

    createNew( name, path ) {

        this.Textures[name]  = new TextureLoader().load( path )

    },

};
