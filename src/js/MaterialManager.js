import { MeshPhysicalMaterial } from 'three'

export const MaterialManager = {

    // Properties
    Materials: {},

    createNew( name, params ) {

        this.Materials[name] = params ? new MeshPhysicalMaterial( params ) : new MeshPhysicalMaterial();

    },

};
