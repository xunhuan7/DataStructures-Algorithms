/**
 * Created by Thinkpad on 2017/9/22.
 */

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid_key = Math.floor(arr.length / 2),
        mid_value = arr.splice(mid_key, 1)[0],
        left = [],
        right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < mid_value) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([mid_value], quickSort(right));
}

console.log(quickSort([8, 5, 4, 6, 2, 1, 15, 3]));