/**
 * Created by Thinkpad on 2017/9/25.
 * 线性表的顺序存储
 * 适合场景：大小能预估；查找为n/2，与链式存储一样；读取为O(1)；不适合插入和删除
 */

function List() {
    //  属性
    this.list = [];
    this.list_size = 0;
    this.pos = 0;
    //  方法
    this.append = append;
    this.remove = remove;
    this.find = find;
    this.length = length;
    this.toString = toString;
    this.insert = insert;
    this.clear = clear;
    this.contains = contains;

    function append(element) {
        this.list[this.list_size++] = element;
    }

    function find(element) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == element) {
                return i;
            }
        }
        return -1;
    }

    function length() {
        return this.list_size;
    }

    function remove(element) {
        var index = this.find(element);
        if (index > -1) {
            this.list.splice(index, 1);
            this.list_size--;
            return true;
        }
        return false;
    }

    function toString() {
        return this.list;
    }

    function insert(element, after) {
        var index = this.find(after);
        if (index > -1) {
            this.list.splice(index + 1, 0, element);
            this.list_size++;
            return true;
        } else {
            return false;
        }
    }

    function clear() {
        delete this.list;
        this.list = [];
        this.pos = 0;
        this.list_size = 0;
    }

    function contains(element) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == element) {
                return true;
            }
        }
        return false;
    }

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.list_size - 1;
    }

    function prev() {
        if (this.pos > 0) {
            this.pos--;
        }
    }

    function next() {
        if (this.pos < this.list_size - 1) {
            this.pos++;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.list[this.pos];
    }
}

var names = new List();
names.append("张钰臻");
names.append("邱金栋");
names.append("罗真");
names.append("邓启堯");
names.insert("第五者", "罗真");
names.remove("邱金栋");
console.log(names.toString() + "\n" + names.length() + "\n" + names.contains("邓启堯"));