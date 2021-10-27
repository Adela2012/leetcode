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
1. 限定左右上下的边界
2. 第一圈为[top, left, bottom, right] = [0, 0, n - 1, m - 1]
3. 当top <= bottom && left <= right，循环继续
4. 通过比价边界值，四个循环，将四条边的数值推入结果数组中。
5. 下一个循环，将左右上下的边界缩小一圈[top, left, bottom, right] = [top + 1, left + 1, bottom - 1, right - 1]
```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) return []
    const N = matrix.length, M = matrix[0].length, res = []
    let [top, left, right, bottom] = [0, 0, M - 1, N - 1]
    while(top <= bottom && left <= right) {
        for (let i = left; i <= right; i++ ){
            res.push(matrix[top][i])
        }
        for (let i = top + 1; i <= bottom; i++ ){
            res.push(matrix[i][right])
        }
        if (top < bottom && left < right) {
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
            for (let i = bottom - 1; i >= top + 1; i--) {
                res.push(matrix[i][left])
            }
        }
        [top, left, right, bottom] = [top+1, left+1, right-1, bottom-1]
    }
    return res
};
```
- 时间复杂度O(MN)
- 空间复杂度O(1)
