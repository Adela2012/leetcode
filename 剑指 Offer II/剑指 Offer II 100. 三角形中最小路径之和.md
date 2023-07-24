# 剑指 Offer II 100. 三角形中最小路径之和

给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

 

示例 1：
```
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
```
示例 2：
```
输入：triangle = [[-10]]
输出：-10
```

提示：
```
1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104
```

进阶：

- 你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？


注意：本题与主站 120 题相同： https://leetcode-cn.com/problems/triangle/

# 解题
## 解题1
在给定的数组上进行状态转移，不使用额外的空间
```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            if (j == 0) {
                triangle[i][j] += triangle[i-1][j]
            } else if (j == triangle[i].length - 1) {
                triangle[i][j] += triangle[i-1][j - 1]
            } else {
                triangle[i][j] += Math.min(triangle[i-1][j], triangle[i-1][j-1])
            }
        }
    }
    return Math.min(...triangle[triangle.length-1])
};
```
- 时间复杂度：O(N^2)
- 空间复杂度：O(1)

## 解题2
将边界条件单独写在j的循环外
```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for(let i = 1; i < triangle.length; i++) {
        const m = triangle[i].length
        triangle[i][0] += triangle[i-1][0]
        triangle[i][m-1] += triangle[i-1][m-2]
        for(let j = 1; j < m-1; j++) {
            triangle[i][j] += Math.min(triangle[i-1][j], triangle[i-1][j-1])
        }
    }
    return Math.min(...triangle[triangle.length-1])
};
```