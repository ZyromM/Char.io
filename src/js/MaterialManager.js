import { MeshPhysicalMaterial } from 'three'

export const MaterialManager = {

    materials: {},

    createNew( name, params ) {

        this.materials[name] = params ? new MeshPhysicalMaterial( params ) : new MeshPhysicalMaterial();

    },

};
