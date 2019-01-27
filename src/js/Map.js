import { Group } from 'three'
import { Cube } from './Cube.js'
import * as THREE from "three";

export const MapBuffer = {

    map: new Group(),

    create ( pos, color ) {

        let texture = new THREE.TextureLoader().load( '../res/Textures/floor2.jpeg' );
        console.log("texture :", texture)
        this.map.name = "map";

        for ( let z = 0; pos[z]; ++z ) {

            for ( let x = 0; pos[z][x]; ++x ) {

                for ( let y = 0; y <= pos[z][x]; ++y ) {

                    y === 0 ? this.map.add(Cube.create(x, y, -z, { color: color })) : this.map.add(Cube.create(x, y, -z, { color: color, texture: texture }));

                }

            }

        }

    },

};
