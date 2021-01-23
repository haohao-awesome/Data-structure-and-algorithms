export default class Stack {
    constructor() {
        this.items = [];//选择数组充当栈
    }
    //入栈
    push(element) {
        // items是一个数组，可以直接调用push方法
        this.items.push(element);
    }
    // 出栈
    pop() {
        //数组的pop方法,就是弹出最后一个元素
        return this.items.pop();
    }
    //查看栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }
    //检查栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }
    //清空栈
    clear() {
        this.items = [];
    }
    //栈的长度
    size() {
        return this.items.length;
    }
}