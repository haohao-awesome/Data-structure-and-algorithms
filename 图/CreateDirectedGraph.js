import Graph from './Graph.js';
import { DFS } from './depthFirstSearch.js';
export { result, myVertices };
let graph = new Graph(true);
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let item of myVertices) {
    graph.addVertex(item);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
let result = DFS(graph);