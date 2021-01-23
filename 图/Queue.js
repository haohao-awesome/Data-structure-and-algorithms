export default class Queue {
    constructor() {
        this.count = 0;//记录下一个队列元素的索引
        this.lowestCount = 0;//队列中第一个元素索引
        this.items = {};//用对象来保存队列
    }
    //队列大小
    size() {
        return this.count - this.lowestCount;
    }
    //检查队列是否为空
    isEmpty() {
        return this.size() === 0;
    }
    // 入队,从队尾插入
    enterQueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    //出队,队头移除
    exitQueue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const exitValue = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return exitValue;
    }
    //访问队首元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    //将队列转换为字符串格式
    toString() {
        if (this.isEmpty()) {
            return undefind;
        }
        let str = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            str = `${str},${this.items[i]}`;//将字符以逗号分隔
        }
        return str;
    }
}