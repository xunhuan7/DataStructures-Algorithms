/**
 * Created by dengqiyao on 2017/4/11.
 * 最快最简单的排序-桶排序
 * 实现0-100整数排序
 */

//升序排列函数
function sortIncrease(get_array) {

    //初始化存储数组
    let sort_array = [];
    for (let i = 0; i <= 100; i++) {
        sort_array[i] = 0;
    }
    //读取参数数组，改动存储数组相应位置
    for (let i = 0; i < get_array.length; i++) {
        sort_array[get_array[i]]++;
    }

    //循环打印排序结果
    for (let m = 0; m < sort_array.length; m++) {
        for (let n = 0; n < sort_array[m]; n++) {
            console.log(m);
        }
    }
}

//降序排列函数
function sortDecrease(get_array) {

    //初始化存储数组
    let sort_array = [];
    for (let i = 0; i <= 100; i++) {
        sort_array[i] = 0;
    }
    //读取参数数组，改动存储数组相应位置
    for (let i = 0; i < get_array.length; i++) {
        sort_array[get_array[i]]++;
    }

    //循环打印排序结果
    for (let m = sort_array.length - 1; m < sort_array.length; m--) {
        for (let n = 0; n < sort_array[m]; n++) {
            console.log(m);
        }
    }
}

//分别调用升序和降序函数
sortIncrease([13, 24, 32, 5, 41, 0, 13]);
sortDecrease([13, 24, 32, 5, 41, 0, 13]);