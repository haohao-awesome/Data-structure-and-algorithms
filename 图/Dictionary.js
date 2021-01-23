
//将key转为字符串形式
function toString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    } else {
        return item.toString();
    }

}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[${this.key}:${this.value}]`;
    }
}

export default class Dictionary {

    constructor(toStr = toString) {
        this.toStr = toStr;
        this.table = {};
    }
    //清空字典
    clear() {
        this.table = {};
    }
    //字典大小
    size() {
        return this.keyValues().length;
    }
    //是否为空
    isEmpty() {
        return this.size() === 0;
    }
    //检查一个键是否在字典中
    haskey(key) {
        return this.table[this.toStr(key)] != null;
    }
    //设置键和值
    set(key, value) {
        if (key != null && value != null) {
            let tableKey = this.toStr(key);
            let element = new ValuePair(key, value);
            this.table[tableKey] = element;
            return true;
        }
        return false;
    }
    //移除
    remove(key) {
        if (this.haskey(key)) {
            delete this.table[this.toStr(key)];
            return ture;
        }
        return false;
    }
    //从字典中检索一个值
    get(key) {
        let valuePair = this.table[this.toStr(key)];
        return valuePair == null ? null : valuePair.value;
    }
    //获取所有ValuePair对象
    keyValues() {
        let valuePairs = [];
        for (let key in this.table) {
            if (this.haskey(key)) {
                valuePairs.push(this.table[key]);
            }
        }
        return valuePairs;
    }
    //获取所有的键
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }
    //获取所有的值
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }
    //迭代键值对
    forEach(callbackFn) {
        let valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            let result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }
    // 迭代键值对，并以字符串的形式返回
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let valuePairs = this.keyValues();
        let str = `[${valuePairs[0].toString()}]`;
        for (let i = 0; i < valuePairs.length; i++) {
            str = `${str},${valuePairs[i].toString()}`;
        }
        return str;
    }
}
