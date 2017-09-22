/**
 * Created by Thinkpad on 2017/9/22.
 */

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var is_sort = true;
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                is_sort = false;
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (is_sort) {
            return arr;
        }
    }
    return arr;
}

console.log(bubbleSort([8, 5, 4, 6, 2, 1, 15, 3]));