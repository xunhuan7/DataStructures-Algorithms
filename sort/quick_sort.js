/**
 * Created by dengqiyao on 2017/4/12.
 * 最常用的排序-快速排序
 */

//升序快排函数
function quickSort(get_array) {

    //数组长度<=1返回立即返回
    if (get_array.length <= 1) {
        return get_array;
    }

    //取基准点
    let tempIndex = Math.floor(get_array.length / 2),
        tempValue = get_array.splice(tempIndex, 1);

    //存放比基准点两边的数组
    let left = [], right = [];

    //遍历数组，进行判断分配
    for (let i = 0; i < get_array.length; i++) {
        if (get_array[i] < tempValue) {
            left.push(get_array[i]);
        }
        else {
            right.push(get_array[i]);
        }
    }

    //递归对左右两个数组进行，直到数组长度为<=1；
    return quickSort(left).concat(tempValue, quickSort(right));
};
console.log(quickSort([4, 42, 1, 3, 19, 27]));