import { buildGraph } from "./graph.js";
import Vertex from "./Vertex.js";


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


function buildPath(start, end, piece) {

    const adjacencyList = buildGraph(piece);

    const results = breadthFirstSearch(adjacencyList, start);

    let endVertex = results[end[0]][end[1]];

    const path = [end];

    while (endVertex.predecessor !== start) {
        path.push(endVertex.predecessor);
        endVertex = results[endVertex.predecessor[0]][endVertex.predecessor[1]];
    }

    path.push(start);

    return path.reverse();
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


export { breadthFirstSearch, printBFS, buildPath };