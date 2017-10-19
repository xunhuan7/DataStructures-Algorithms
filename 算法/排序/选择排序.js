/**
 * Created by Thinkpad on 2017/9/22.
 */

function selectSort(arr) {
    var len = arr.length,
        min_index;
    for (var i = 0; i < len - 1; i++) {
        min_index = i;  //假设i处为最小值
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;  //找出最小值的地址
            }
        }
        var temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}

console.log(selectSort([8, 5, 4, 6, 2, 1, 15, 3]));
