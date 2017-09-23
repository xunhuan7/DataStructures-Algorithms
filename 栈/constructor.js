/**
 * Created by Thinkpad on 2017/9/23.
 */

//  构造栈结构
function Stack() {
    this.stack = [];
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.isEmpty = isEmpty;
    this.size = size;
    this.clear = clear;
    //  入栈
    function push(arg) {
        this.stack.push(arg);
    }

    //  出栈
    function pop() {
        return this.stack.pop();
    }

    //  返回栈顶元素
    function peek() {
        return this.stack[this.stack.length - 1];
    }
    //  栈是否为空
    function isEmpty(){
        return this.stack.length == 0;
    }
    //  获取栈的大小
    function size() {
        return this.stack.length;
    }

    //  清空栈
    function clear() {
        this.stack = [];
    }
}

module.exports = Stack;
