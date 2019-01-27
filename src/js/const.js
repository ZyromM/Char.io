import { Vector3 } from "three";

export const exampleMap = {

    map :
        [
            "11111111111111111111111111111",
            "10000000000000000000000000001",
            "10000000000000000000000000001",
            "11111111100000000000000000001",
            "10000000000000000000000000001",
            "10000000000005000000000000001",
            "10000000000000000000003000001",
            "10000000000000000000000000001",
            "10000000050000000000000000001",
            "10000000000000000000000000001",
            "10000000000000000005000000001",
            "10000000000000000000000000001",
            "10000003000000000000000000001",
            "10000000000000000000000000001",
            "10000000000000003000000000001",
            "10000000100000000000000000001",
            "10000000100000000000400000001",
            "10000000100000000000000000001",
            "10000000000000000001111111111",
            "10000000000000000000000000001",
            "10000000000000000000000000001",
            "11111111111111111111111111111",
        ]

};

export const Y_AXIS = new Vector3( 0, 1, 0 );
export const X_AXIS = new Vector3( 1, 0, 0 );

export const WINDOW_WIDTH = window.innerWidth;
export const WINDOW_HEIGHT = window.innerHeight;
