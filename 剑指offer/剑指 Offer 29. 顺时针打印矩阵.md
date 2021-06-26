# 剑指 Offer 29. 顺时针打印矩阵
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

示例 1：
```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```
示例 2：

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

限制：
```
0 <= matrix.length <= 100
0 <= matrix[i].length <= 100
```

# 解题
```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) return []
    let n = matrix.length, m = matrix[0].length
    let [top, left, bottom, right] = [0, 0, n - 1, m - 1]

    const res = []
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        for (let j = top + 1; j <= bottom; j++) {
            res.push(matrix[j][right])
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
            for (let j = bottom - 1; j > top; j--) {
                res.push(matrix[j][left])
            }
        }
        [top, left, bottom, right] = [top + 1, left + 1, bottom - 1, right - 1]
    }
    return res
    
};
```
