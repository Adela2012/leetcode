# 剑指 Offer II 040. 矩阵中最大的矩形
给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。

注意：此题 matrix 输入格式为一维 01 字符串数组。

 

示例 1：

![maximal](https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg){:width="402" height="322" align="left"}

```
输入：matrix = ["10100","10111","11111","10010"]
输出：6
解释：最大矩形如上图所示。
```
示例 2：
```
输入：matrix = []
输出：0
```
示例 3：
```
输入：matrix = ["0"]
输出：0
```
示例 4：
```
输入：matrix = ["1"]
输出：1
```
示例 5：
```
输入：matrix = ["00"]
输出：0
```

提示：
```
rows == matrix.length
cols == matrix[0].length
0 <= row, cols <= 200
matrix[i][j] 为 '0' 或 '1'
```

注意：本题与主站 85 题相同（输入参数格式不同）： https://leetcode-cn.com/problems/maximal-rectangle/


# 解题
1. 将矩阵转换为直方图，计算直方图的最大矩形。
   1. 例如["10100","10111","11111","10010"]，
   2. 第一行为[ 1, 0, 1, 0, 0, 0 ]
   3. 第二行为[ 2, 0, 2, 1, 1, 0 ]
   4. 第三行为[ 3, 1, 3, 2, 2, 0 ]
   5. 第四行为[ 4, 0, 0, 3, 0, 0 ]
   6. 最末尾添加0，为了largestRectangleArea方法中，方便最后stack栈排空
2. largestRectangleArea方法，具体解析查看[剑指 Offer II 039. 直方图最大矩形面积](/剑指%20Offer%20II/剑指%20Offer%20II%20039.%20直方图最大矩形面积.md)
   1. 维持一个单调递增的栈，存储heights[i]高度的下标，方便计算宽度。
   2. 循环heights高度，默认入栈，
      1. 在每次入栈前，判断stack栈内是否存在比当前heights[i]高的元素，
      2. 如果有，计算
      3. 以栈顶元素下标的 `heights[stack.pop()]` 的高度，同时出栈
      4. 以计算当前下标-栈顶元素的宽度，`i-stack[stack.length - 1]-1`
      5. 更新最大值，`max = Math.max(max, height * width)`
```js
/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length == 0) return 0
    const heights = new Array(matrix[0].length+1).fill(0)
    let max = 0
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            heights[j] = matrix[i][j] == '0' ? 0 : heights[j] + +matrix[i][j]
        }
        max = Math.max(max, largestRectangleArea(heights))
    }
    return max 
};

function largestRectangleArea(heights) {
    let stack = [-1], max = 0
    for (let i = 0; i < heights.length; i++) {
        while(stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i])  {
            const height = heights[stack.pop()]
            const width = i - stack[stack.length - 1] - 1
            max = Math.max(max, height * width)
        }
        stack.push(i)
    }
    return max
}

```
- 时间复杂度O(MN)，N=matrix.length，M=matrix[0].length
- 空间复杂度O(M)