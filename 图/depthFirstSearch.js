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
export const depthFirstSearch = (graph, callback) => {
    let vertices = graph.getVertices();
    let adjList = graph.getAdjList();
    let color = initializeColor(vertices);
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
};
const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY;
    if (callback) {
        callback(u);
    }
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback)
        }
    }
    color[u] = Colors.BLACK;
};
export const DFS = graph => {
    let vertices = graph.getVertices();
    let adjList = graph.getAdjList();
    let color = initializeColor(vertices);
    let d = {};
    let f = {};
    let p = {};
    let time = { count: 0 };
    for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    }
}
const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.BLACK;
    f[u] = ++time.count;
};