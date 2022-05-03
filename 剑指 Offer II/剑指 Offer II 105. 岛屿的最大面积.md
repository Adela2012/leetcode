# 剑指 Offer II 105. 岛屿的最大面积

给定一个由 0 和 1 组成的非空二维数组 grid ，用来表示海洋岛屿地图。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

 

示例 1:

```
输入: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
输出: 6
解释: 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。
```
示例 2:
```
输入: grid = [[0,0,0,0,0,0,0,0]]
输出: 0
```

提示：
```
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1
```

注意：本题与主站 695 题相同： https://leetcode-cn.com/problems/max-area-of-island/

# 解题
## 解题1
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let n = grid.length, m = grid[0].length, ans = 0
    for (let i = 0; i < n; i++)  {
        for (let j = 0; j < m; j++) {
            ans = Math.max(ans, dfs(i, j))
        }
    }
    return ans

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == 0) return  0
        grid[i][j] = 0
        const di = [0,0,1,-1], dj = [1,-1,0,0]
        let tmp = 1
        for (let d = 0; d < 4; d++) {
            const nextI = i+di[d], nextJ = j+dj[d]
            tmp += dfs(nextI, nextJ)
        }
        return tmp
    }
};
```

## 解题2
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let n = grid.length, m = grid[0].length, ans = 0
    for (let i = 0; i < n; i++)  {
        for (let j = 0; j < m; j++) {
            ans = Math.max(ans, getArea(i, j))
        }
    }
    return ans

    function getArea(si, sj) {
        let stack = [[si,sj]]
        let tmp = 0

        while(stack.length) {
            const [i, j] = stack.pop()
            if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == 0) continue
            tmp++
            grid[i][j] = 0
            const di = [0,0,1,-1], dj = [1,-1,0,0]
            for (let d = 0; d < 4; d++) {
                stack.push([i+di[d], j+dj[d]]) 
            }
        }
         
        return tmp
    }
};
```