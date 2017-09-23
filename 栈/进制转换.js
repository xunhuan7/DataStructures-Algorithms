/**
 * Created by Thinkpad on 2017/9/24.
 * 将十进制数转换为2进制，8进制等
 */

var Stack = require('./constructor.js');

function baseConverter(number, base) {
    var stack = new Stack(),
        str = '0123456789ABCDEF',
        result = '';
    while (number > 0) {
        stack.push(number % base);
        number = parseInt(number / base);
    }
    while (!stack.isEmpty()) {
        result += str[stack.pop()];
    }
    return result;
}

console.log(baseConverter(21, 2));