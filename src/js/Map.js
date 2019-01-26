import { Group } from 'three'
import { Cube } from './Cube.js'

export const MapBuffer = {

    map: new Group(),

    create ( pos, color ) {

        this.map.name = "map";

        for ( let z = 0; pos[z]; ++z ) {

            for ( let x = 0; pos[z][x]; ++x ) {

                for ( let y = 0; y <= pos[z][x]; ++y ) {

                    this.map.add(Cube.create(x, y, -z, { color: color }));

                }

            }

        }

    },

};
