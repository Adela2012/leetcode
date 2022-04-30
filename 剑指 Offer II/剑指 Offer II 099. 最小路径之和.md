# 剑指 Offer II 099. 最小路径之和

给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：一个机器人每次只能向下或者向右移动一步。


![minpath](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg){:width="242" height="242" align="left"}

示例 1：
```
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```
示例 2：
```
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```

提示：
```
m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100
```

注意：本题与主站 64 题相同： https://leetcode-cn.com/problems/minimum-path-sum/

# 解题
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let n = grid.length, m = grid[0].length
    for (let i = 1; i < n; i++) {
        grid[i][0] += grid[i-1][0]
    }
    for (let j = 1; j < m; j++) {
        grid[0][j] += grid[0][j-1]
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
        }
    }
    return grid[n-1][m-1]
};
```
- 时间复杂度：O(mn)
- 空间复杂度：O(1)