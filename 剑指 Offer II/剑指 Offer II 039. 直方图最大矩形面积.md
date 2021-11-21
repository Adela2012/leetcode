# 剑指 Offer II 039. 直方图最大矩形面积

给定非负整数数组 heights ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

示例 1:


![histogram](https://pic.leetcode-cn.com/1637500667-TVzBuW-histogram.jpg)

```
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```
示例 2：

![histogram-1](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)


```
输入： heights = [2,4]
输出： 4
```
 

提示：
```
1 <= heights.length <=105
0 <= heights[i] <= 104
```

注意：本题与主站 84 题相同： https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

# 解题
## 解题1
固定某点，往左侧和右侧查找最大，时间复杂度O(N^2)，超出时间限制了。
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0
    for (let i = 0; i < heights.length; i++) {
        let x = i-1, y = i+1; 
        while (heights[x] && heights[i] <= heights[x]) {
            x--
        }
        while (heights[y]  && heights[i] <= heights[y]){
            y++
        }
        let sum = heights[i] * (y - x - 1)
        max = Math.max(sum, max)
    }
    return max
};
```
- 时间复杂度O(N^2)
- 空间复杂度O(1)


## 解题2
1. 维持一个单调递增的栈，存储heights[i]高度的下标，方便计算宽度。
2. 在heights的末尾添加一个0的高度，方便最后stack栈排空。
3. 循环heights高度，默认入栈，
   1. 在每次入栈前，判断stack栈内是否存在比当前heights[i]高的元素，
   2. 如果有，计算
   3. 以栈顶元素下标的 `heights[stack.pop()]` 的高度，同时出栈
   4. 以计算当前下标-栈顶元素的宽度，`i-stack[stack.length - 1]-1`
   5. 更新最大值，`max = Math.max(max, height * width)`

下标i|while循环|stack|宽度|高度|面积
--|--|--|--|--|--
0|false|[ -1, 0 ]
1|true|[ -1 ]| 2 |1 |2
1|false|[ -1, 1 ]
2|false|[ -1, 1, 2 ]
3|false|[ -1, 1, 2, 3 ]
4|true|[ -1, 1, 2 ]| 6| 1|6
4|true|[ -1, 1 ]| 5 |2 |10
4|false|[ -1, 1, 4 ]
5|false|[ -1, 1, 4, 5 ]
6|true|[ -1, 1, 4 ]| 3 |1 |3
6|true|[ -1, 1 ]| 2 |4 |8
6|true|[ -1 ] |1 |6 |6
6|false|[ -1, 6 ]
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0)
    let stack = [-1], max = 0
    for (let i = 0; i < heights.length; i++) {
        while(stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
            let height = heights[stack.pop()]
            let width = i - stack[stack.length - 1] - 1
            max = Math.max(max, height * width)
        }
        stack.push(i)
    }
    return max
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)