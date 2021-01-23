import Dictionary from './Dictionary.js';
// var name = 'liu';
// export { name };
// export default class Graph {

// }
export default class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];//顶点列表
        this.adjList = new Dictionary();//邻接表
    }
    //添加顶点
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }
    //添加边
    addEdge(v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v);
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w);
        }
        this.adjList.get(v).push(w);
        if (!this.isDirected) {
            this.adjList.get(w).push(v);
        }
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
    toString() {
        let str = '';
        for (let i = 0; i < this.vertices.length; i++) {
            str += `${this.vertices[i]} -> `;
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                str += `${neighbors[j]} `;
            }
            str += '\n';
        }
        return str;
    }
}