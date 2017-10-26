/**
 * Created by Thinkpad on 2017/10/16.
 */

// 实现Set类：add、remove、has、clear、size、values
function Set() {
    var items = {};
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.values = function () {
        return Object.keys(items);
    };
    // 求并集
    this.union = function (another_set) {
        var union_set = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            union_set.add(values[i]);
        }
        values = another_set.values();
        for (var j = 0; j < values.length; j++) {
            union_set.add(values[j]);
        }

        return union_set;
    };
    // 求交集
    this.intersection = function (another_set) {
        var intersection_set = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (another_set.has(values[i])) {
                intersection_set.add(values[i]);
            }
        }
        return intersection_set;
    };
    // 求差集
    this.difference = function (another_set) {
        var difference_set = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!another_set.has(values[i])) {
                difference_set.add(values[i]);
            }
        }
        return difference_set;
    };
    //子集判断
    this.subset = function (another_set) {
        if (this.size() > another_set.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!another_set.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    };
}