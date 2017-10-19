/**
 * Created by Thinkpad on 2017/10/16.
 */

// 实现Stack类：push、pop、peek、isEmpty、clear、size、print
function Stack() {
    var items = [];
    this.push = function (element) {
        items.push(element);
    };
    this.pop = function () {
        return items.pop();
    };
    this.peek = function () {
        return items[items.length - 1];
    };
    this.isEmpty = function () {
        return (items.length === 0)
    };
    this.clear = function () {
        items = [];
    };
    this.size = function () {
        return items.length;
    };
    this.print = function () {
        console.log(items.toString());
    };
}

// 栈的应用
var apply = {

    // 1、将十进制转换为指定进制
    baseConverter: function (num, base) {
        var rem_stack = new Stack(),
            rem,
            digits = '0123456789ABCDEF',
            result = '';
        //循环取余入栈
        while (num > 0) {
            rem = Math.floor(num % base);
            rem_stack.push(rem);
            num = Math.floor(num / base);
        }
        while (!rem_stack.isEmpty()) {
            result += digits[rem_stack.pop()];
        }
        return result;
    },

    // 2、平衡括号问题
    isBracketBalance: function (str) {
        var bracket_stack = new Stack(),
            len = str.length;
        for (var i = 0; i < len; i++) {
            // 为左括号:入栈
            if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
                bracket_stack.push(str[i]);
            }
            // 为右括号：栈不能为空；与栈顶元素对应；以上满足则出栈栈顶元素，否则返回false
            if (str[i] == ')' || str[i] == ']' || str[i] == '}') {
                if (bracket_stack.isEmpty()) {
                    return false;
                }
                switch (str[i]) {
                    case ')': {
                        if ('(' != bracket_stack.peek()) {
                            return false;
                        }
                        break;
                    }
                    case ']': {
                        if ('[' != bracket_stack.peek()) {
                            return false;
                        }
                        break;
                    }
                    case '}': {
                        if ('{' != bracket_stack.peek()) {
                            return false;
                        }
                        break;
                    }
                    default:
                        break;
                }
                bracket_stack.pop();
            }
        }
        // 栈为空说明括号平衡
        if (bracket_stack.isEmpty()) {
            return true;
        } else {
            return false;
        }
    },

    // 3、后缀表达式求值
    compute: function (str) {
        var stack = new Stack();
        for (var i = 0; i < str.length; i++) {
            switch (str[i]) {
                case '+':
                    stack.push(parseInt(stack.pop()) + parseInt(stack.pop()));
                    break;
                case '-':
                    stack.push(parseInt(stack.pop()) - parseInt(stack.pop()));
                    break;
                case '*':
                    stack.push(parseInt(stack.pop()) * parseInt(stack.pop()));
                    break;
                case '/':
                    stack.push(parseInt(stack.pop()) / parseInt(stack.pop()));
                    break;
                case ' ':
                    break;
                default:
                    stack.push(str[i]);
                    break;
            }
        }
        return stack.pop();
    }
};