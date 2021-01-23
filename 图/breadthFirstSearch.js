import { graph } from './UsingGraphs.js';
import Queue from './Queue.js';
//标注顶点的状态
const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2,
};
//初始化每个顶点的颜色
const initializeColor = vertices => {
    let color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};
export const breadthFirstSearch = (graph, startVertex, callback) => {
    let vertices = graph.getVertices();
    let adjList = graph.getAdjList();
    let color = initializeColor(vertices);//初始化每个顶点的颜色
    let queue = new Queue();//检查队列,深度优先，先进先出
    queue.enterQueue(startVertex);
    while (!queue.isEmpty()) {
        let u = queue.exitQueue();//出队
        let neighbors = adjList.get(u);//获取相邻顶点
        color[u] = Colors.GREY;//发现了该顶点，还没有探索
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === Colors.WHITE) {//未访问过的顶点
                color[w] = Colors.GREY;//标注为发现，这样在下一个顶点的相邻顶点中出现了与上一个顶点的同一个相邻节点，不会重复
                queue.enterQueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }

    }
};
export const BFS = (graph, startVertex) => {
    let vertices = graph.getVertices();
    let adjList = graph.getAdjList();
    let color = initializeColor(vertices);
    let queue = new Queue();
    let distances = {};//距离
    let predecessors = {};//前溯点
    queue.enterQueue(startVertex);
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }
    while (!queue.isEmpty()) {
        let u = queue.exitQueue();
        let neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;//保存前溯顶点
                queue.enterQueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distances, predecessors
    };

};