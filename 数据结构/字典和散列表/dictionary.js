/**
 * Created by Thinkpad on 2017/10/16.
 */

// 实现Dictionary类：set、delete、has、get、clear、size、keys、values
function Dictionary() {
    var items = {};

    this.has = function (key) {
        return items.hasOwnProperty(key);
    };
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.set = function (key, value) {
        items[key] = value;
    };
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.keys = function () {
        return Object.keys(items);
    };
    this.values = function () {
        var values = [];
        for (var i in items) {
            if (this.has(i)) {
                values.push(items[i]);
            }
        }
        return values;
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    }
}