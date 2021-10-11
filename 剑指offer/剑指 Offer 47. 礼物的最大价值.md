# 剑指 Offer 47. 礼物的最大价值
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 

示例 1:

```
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

提示：

```
0 < grid.length <= 200
0 < grid[0].length <= 200
```


# 解题
动态规划解法
1. 题目说：每次向右或者向下移动一格、直到到达棋盘的右下角。
2. 也就是说单元格grid[i][j]只能从它的上单元格grid[i][j-1]或者左单元格到达grid[i-1][j]
3. 即当前单元格的最大值为grid[i][j] += Math.max(grid[i-1][j], grid[i][j-1])
4. 此外，需要先处理一下边界情况
   1. 最上面的单元格，只能从左单元格到达，grid[i][0] += grid[i - 1][0]
   1. 最左面的单元格，只能从上单元格到达，grid[0][j] += grid[0][j-1]
5. 最后返回右下单元格的值grid[n-1][m-1]，即为最大值
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let n = grid.length 
    let m = grid[0].length
    for (let i = 1; i < n; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    for (let j = 1; j < m; j++) {
        grid[0][j] += grid[0][j-1]
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            grid[i][j] += Math.max(grid[i-1][j], grid[i][j-1]) 
        }
    }
    return grid[n-1][m-1]
};
```