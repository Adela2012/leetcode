# 剑指 Offer 04. 二维数组中的查找
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：
```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```
给定 target = 5，返回 true。

给定 target = 20，返回 false。

 

限制：
```
0 <= n <= 1000

0 <= m <= 1000
```

# 解题
1. 从右上角来看，其左边单调递减，右边单调递增。
2. 因此只要从右上角判断当前数字与target的大小
3. 若`matrix[i][j] > target`，执行`j--`
4. 若`matrix[i][j] < target`, 执行`i++`
5. 若`matrix[i][j] == target`, 返回true
6. 遍历完数组都没有找到`j >= 0 && i < matrix.length`，返回false
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length == 0 || matrix[0].length == 0) return false
    let i = 0, j = matrix[0].length - 1
    while(j >= 0 && i < matrix.length) {
        if (matrix[i][j] > target) j--
        else if (matrix[i][j] < target) i++
        else return true
    }
    return false
};
```
