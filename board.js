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


function buildGraph(piece) {

    const adjacencyList = []; //empty graph as adjacency list

    for (let i = 0; i < 8; i++){
        //push empty array for board position (i, );
        adjacencyList.push([]); 
        for (let j = 0; j < 8; j++){
             //push empty array for board position (i, j)
            adjacencyList[i].push([]);
            for (let m = 0; m < piece.moves.length; m++){
                const pos = [i + piece.moves[m][0], j + piece.moves[m][1]];
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
            console.log(`at pos [ ${i}, ${j} ] -> `, graph[i][j] );
        }
    }
}


function breadthFirstSearch(graph, source) {
    const bfsInfo = [];
    for (let i = 0; i < graph.length; i++){
        bfsInfo.push([]);
        for (let j = 0; j < graph[i].length; j++){
            bfsInfo[i][j] = new Vertex();
        }
    }

    bfsInfo[source[0]][source[1]].distance = 0;
    const queue = [];
    queue.push(source);

    while (queue.length > 0) {

        let current = queue.shift();

        for (let i = 0; i < graph[current[0]][current[1]].length; i++){

            let adjacent = graph[current[0]][current[1]][i];

            if (bfsInfo[adjacent[0]][adjacent[1]].distance === null) {

                bfsInfo[adjacent[0]][adjacent[1]].predecessor = current;
                bfsInfo[adjacent[0]][adjacent[1]].distance = bfsInfo[current[0]][current[1]].distance + 1;
                queue.push(adjacent);
            }
        }
    }
    return bfsInfo;
}

function printBFS(results) {

    for (let i = 0; i < results.length; i++){
        for (let j = 0; j < results[i].length; j++) {
            console.log(`vertex [ ${i}, ${j} ]:`+
            ` distance = ${results[i][j].distance},`+
            ` predecessor = ${results[i][j].predecessor}`);
        }
    }
    
}


const graph = buildGraph(knight);

//printGraph(graph);

const results = breadthFirstSearch(graph, [7, 7]);

printBFS(results);