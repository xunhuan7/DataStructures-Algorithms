### 算法基础
#### 一、排序
##### 1.桶排序
* 桶排序是借用数组，实现快速排序。遍历待排序的数组，将其数字作为结果的数组的下标，某数出现一次，结果数组相应下标自增。最后，按照一定顺序输出结果数组
* 时间复杂度为O(M+N)
* 桶排序有很大的缺陷：只能处理整数；如果排序范围比较大，"桶"数组长度也会很大，浪费大量空间
#####2.冒泡排序
* 冒泡排序的核心部分是双重嵌套循环，复杂度为O(N^2)
* 冒泡排序的改进都比较失败