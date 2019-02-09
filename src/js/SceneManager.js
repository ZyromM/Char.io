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

            if ( Array.isArray(params[i] ) ) {

                //console.log("tab");

                for (let k of params[i]) {

                    this.scenes.add(k);

                }


            } else {

                //console.log("oui")
                this.scenes.add( params[i] );

            }

        }

    },

    addObjectToScene ( params ) {

        if (!this.scenes) {

            console.log("err: scene not created!");
            return

        }

        //console.log("obj");

        for (let i in params) {

            for (let item in params[i]) {

                if (params[i].hasOwnProperty(item)) this.scenes.add(params[i][item]);

            }

        }

    },

    addForceToScene ( param ) {

        this.scenes.add( param );

    },

};
