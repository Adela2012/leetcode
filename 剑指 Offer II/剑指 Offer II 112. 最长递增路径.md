# 剑指 Offer II 112. 最长递增路径

给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。

 

示例 1：

```
输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
输出：4 
解释：最长递增路径为 [1, 2, 6, 9]。
```
示例 2：


```
输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
输出：4 
解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
```
示例 3：
```
输入：matrix = [[1]]
输出：1
```

提示：
```
m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 231 - 1
```

注意：本题与主站 329 题相同： https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/

# 解题
```js
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]]

    const n = matrix.length, m = matrix[0].length
    const memos = new Array(n).fill(0).map(() => new Array(m).fill(0))
    let ans = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans = Math.max(ans, dfs(i, j))
        }
    }
    return ans


    function dfs(i, j) {
        if (memos[i][j] != 0) return memos[i][j]
        memos[i][j]++
        for (const dir of dirs) {
            const x = i + dir[0], y = j + dir[1]
            if (x >= 0 && x < n && y >= 0 && y < m && matrix[x][y] > matrix[i][j]) {
                memos[i][j] = Math.max(memos[i][j], dfs(x, y)+1)
            }
        }
        return memos[i][j]
    }

};
```

## 解题2
```js
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const n = matrix.length, m = matrix[0].length
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let d of dirs) {
                const x = i + d[0], y = j + d[1]
                if (x >= 0 && x < n && y >= 0 && y < m && matrix[x][y] > matrix[i][j]) {
                    ++dp[i][j]
                }
            }
        }
    }
    const queue = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dp[i][j] == 0) {
                queue.push([i,j])
            }
        }
    }
    let ans = 0
    while(queue.length) {
        const size = queue.length
        ans++
        for (let k = 0; k < size; k++) {
            const [i,j] = queue.shift()
            for (let d of dirs) {
                let x = i + d[0], y = j + d[1]
                if (x >= 0 && x < n && y >= 0 && y < m && matrix[x][y] < matrix[i][j]) {
                    --dp[x][y]
                    if (dp[x][y] == 0) {
                        queue.push([x,y])
                    }
                }
            }
        }
    }
    return ans

};
```