/**
 * Created by dengqiyao on 2017/4/13.
 * 去重并排序0-1000的整数
 */

//桶排序
function bucketSort(get_array) {

    let len = get_array.length,
        sort_array = [];

    //初始化排序结果存放数组
    for (let i = 0; i <= 1000; i++) {
        sort_array[i] = 0;
    }

    //如果出现过，就赋值为1（同时去重）
    for (let i = 0; i < len; i++) {
        let index = get_array[i];
        sort_array[index] = 1;
    }

    //打印所有数值为1的索引
    for (let i = 0; i < len; i++) {
        if (sort_array[i] == 1) {
            console.log(i);
        }
    }
}

//冒泡排序
function bubbleSort(get_array) {
    let len = get_array.length;
    //冒泡
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (get_array[j] > get_array[j + 1]) {
                let temp = get_array[j];
                get_array[j] = get_array[j + 1];
                get_array[j + 1] = temp;
            }
        }
    }

    // 打印输出；去重
    for (let i = 0; i < len; i++) {
        if (get_array[i] != get_array[i + 1]) {
            console.log(get_array[i]);
        }
    }
}

//调用函数
bucketSort([2, 2, 4, 3, 1, 5, 6, 9, 8, 0, 1]);
bucketSort([2, 2, 4, 3, 1, 5, 6, 9, 8, 0, 1]);