import Piece from "./Piece.js";
import Vertex from "./Vertex.js";
import { inRange } from "./util.js";

const knight = new Piece(null, [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1]
]);


function buildGraph() {

    const adjacencyList = []; //empty graph as adjacency list

    for (let i = 0; i < 8; i++){
        //push empty array for board position (i, );
        adjacencyList.push([]); 
        for (let j = 0; j < 8; j++){
             //push empty array for board position (i, j)
            adjacencyList[i].push([]);
            for (let m = 0; m < knight.moves.length; m++){
                const pos = [i + knight.moves[m][0], j + knight.moves[m][1]];
                if (inRange(pos[0], 0, 7) && inRange(pos[1], 0, 7)) { 
                    // push adjacent move to position (i,j)
                    adjacencyList[i][j].push(pos); 
                }
                    
             }
        }
    }
    return adjacencyList;
}

function printGraph(graph) {
    for (let i = 0; i < graph.length; i++){
        for (let j = 0; j < graph.length; j++){
            console.log(`at pos ${i}, ${j} -> `, graph[i][j] );
        }
    }
}

const graph = buildGraph();

printGraph(graph);