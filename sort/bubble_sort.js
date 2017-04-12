/**
 * Created by dengqiyao on 2017/4/12.
 * 经典排序-冒泡排序
 */

//升序冒泡函数
function sortIncrease(get_array) {
    var len = get_array.length;
    for (let m = 1; m < len; m++) {
        for (let n = 0; n < len-m; n++) {
            if (get_array[n] > get_array[n + 1]) {
                let temp = get_array[n];
                get_array[n] = get_array[n + 1];
                get_array[n + 1] = temp;
            }
        }
    }
    for (let i = 0; i < len; i++) {
        console.log(get_array[i]);
    }
}

//降序冒泡函数
function sortDecrease(get_array) {
    var len = get_array.length;
    for (let m = 1; m < len-m; m++) {
        for (let n = 0; n < len; n++) {
            if (get_array[n] < get_array[n + 1]) {
                let temp = get_array[n];
                get_array[n] = get_array[n + 1];
                get_array[n + 1] = temp;
            }
        }
    }
    for (let i = 0; i < len; i++) {
        console.log(get_array[i]);
    }
}

//对象升序冒泡
function sortIncreaseObj(get_obj) {
    var len = get_obj.length;
    for (let m = 1; m < len; m++) {
        for (let n = 0; n < len-m; n++) {
            if (get_obj[n].num > get_obj[n + 1].num) {
                let temp = get_obj[n];
                get_obj[n] = get_obj[n + 1];
                get_obj[n + 1] = temp;
            }
        }
    }
    for (let i = 0; i < len; i++) {
        console.log(get_obj[i]);
    }
}

//降序冒泡排序
function sortIncreaseObj(get_obj) {
    var len = get_obj.length;
    for (let m = 1; m < len; m++) {
        for (let n = 0; n < len-m; n++) {
            if (get_obj[n].num > get_obj[n + 1].num) {
                let temp = get_obj[n];
                get_obj[n] = get_obj[n + 1];
                get_obj[n + 1] = temp;
            }
        }
    }
    for (let i = 0; i < len; i++) {
        console.log(get_obj[i]);
    }
}

//降序冒泡函数
function sortDecreaseObj(get_obj) {
    var len = get_obj.length;
    for (let m = 1; m < len; m++) {
        for (let n = 0; n < len -m; n++) {
            if (get_obj[n].num < get_obj[n + 1].num) {
                let temp = get_obj[n];
                get_obj[n] = get_obj[n + 1];
                get_obj[n + 1] = temp;
            }
        }
    }
    for (let i = 0; i < len; i++) {
        console.log(get_obj[i]);
    }
}

//分别调用升序和降序函数
sortIncrease([1, 5, 543, 34242, 5435, 55, 5, 2, 0]);
sortDecrease([1, 5, 543, 34242, 5435, 55, 5, 2, 0]);
sortIncreaseObj([{name:'deng',num:4},{name:'qi',num:3},{name:'yao',num:8}]);
sortDecreaseObj([{name:'deng',num:4},{name:'qi',num:3},{name:'yao',num:8}]);