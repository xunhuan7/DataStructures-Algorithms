/**
 * Created by Thinkpad on 2017/9/22.
 */

function sort(arr) {
    //  i之前看为有序序列
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            //  保存无序序列的第一个值
            var guard = arr[i];
            //  记录有序序列最后一个元素的位置
            var j = i - 1;
            //  获取插入位置
            while (j >= 0 && guard < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            // 插入
            arr[j + 1] = guard;
        }
    }
    return arr;
}

console.log(sort([8, 5, 4, 6, 2, 1, 15, 3, 95, 86]));