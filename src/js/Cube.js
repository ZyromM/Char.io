import { BoxBufferGeometry, Mesh, MeshLambertMaterial } from "three";

export const Cube = {

    width: 1,
    height: 1,
    depth: 1,

    geometry: new BoxBufferGeometry( 1, 1, 1 ),
    material: new MeshLambertMaterial(),
    mesh: null,

    create ( x, y, z, ...params ) {

        if ( params.width ) this.width = params.width;
        if ( params.height ) this.height = params.height;
        if ( params.depth ) this.depth = params.depth;
        if ( params.color ) this.material.color.set( params.color );

        this.mesh = new Mesh( this.geometry, this.material );

        //console.log("x: ", x, "y: ", y, "z: ", z);
        this.mesh.position.set( x, y, z );

        return this.mesh
    }

};
