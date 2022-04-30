# 剑指 Offer II 098. 路径的数目
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

 

示例 1：
```
输入：m = 3, n = 7
输出：28
```
示例 2：
```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```
示例 3：
```
输入：m = 7, n = 3
输出：28
```
示例 4：
```
输入：m = 3, n = 3
输出：6
```

提示：
```
1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
```

注意：本题与主站 62 题相同： https://leetcode-cn.com/problems/unique-paths/

# 解题
## 解题1
1. 因为机器人每次只能向下或者向右移动一步，
2. 机器人到某个网格既能从上一步下来，也能从左一步过来。将两者过来的路径数相加
3. 因此`dp[i][j] = dp[i-1][j] + dp[i][j-1]`
4. 边界处理：
   1. 在最左边，机器人只能从上来，因此`dp[i][0] = 1`
   1. 在最上边，机器人只能从坐来，因此`dp[0][j] = 1`
```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
```
- 时间复杂度：O(mn)
- 空间复杂度：O(mn)

## 解题2
```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let ans = 1
    for (let x = n, y = 1; y < m; y++, x++) {
        ans = Math.floor(ans * x / y)
    }
    return ans
};
```
- 时间复杂度：O(m)
- 空间复杂度：O(1)
