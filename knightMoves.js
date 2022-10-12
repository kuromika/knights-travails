import Piece from "./Piece.js";
import { buildPath } from "./breadFirstSearch.js";

const knight = new Piece([
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1]
]);

function knightMoves(start, end) {
    
    const path = buildPath(start, end, knight);

    console.log(`You made it in ${path.length - 1} moves! Here's your path: `);

    for (let i = 0; i < path.length; i++){
        console.log(path[i]);
    }
}

knightMoves([0, 0], [7, 7]);