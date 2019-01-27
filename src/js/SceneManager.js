import { Scene } from 'three'

export const SceneManager = {

    scenes: null,

    createNew () {

        this.scenes = new Scene();

    },

    addToScene ( ...params ) {

        if ( !this.scenes ) {

            console.log( "err: scene not created!" );
            return

        }

        for ( let i in params ) {

            if ( Array.isArray( params[i] ) ) {

                console.log("true array");

                for ( let k of params[i] ) {

                    this.scenes.add( k );

                }

            } else {

                this.scenes.add( params[i] );

            }

        }

    },

};
