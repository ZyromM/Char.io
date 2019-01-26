import { Scene } from 'three'

export const SceneManager = {

    scene: null,

    createNewScene () {

        this.scene = new Scene();

    },

    addToScene ( ...params ) {

        if ( !this.scene ) {

            console.log( "err: scene not created!" );
            return

        }

        for ( let i in params ) {

            if ( Array.isArray( params[i] ) ) {

                console.log("true array");

                for ( let k of params[i] ) {

                    this.scene.add( k );

                }

            } else {

                this.scene.add( params[i] );

            }

        }

    },

};
