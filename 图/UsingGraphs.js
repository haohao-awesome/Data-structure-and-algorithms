export let graph = new Graph();
import Graph from './Graph.js';

// import name from './Graph.js';
// console.log(name);
// console.log(Graph);


export const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
//添加顶点
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
//添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
// console.log(graph.toString());
