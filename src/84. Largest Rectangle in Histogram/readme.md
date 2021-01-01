## 84. Largest Rectangle in Histogram

Hard

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

<img src="https://assets.leetcode.com/uploads/2018/10/12/histogram.png" style="width: 188px; height: 204px;">


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

<img src="https://assets.leetcode.com/uploads/2018/10/12/histogram_area.png" style="width: 188px; height: 204px;">


The largest rectangle is shown in the shaded area, which has area = 10 unit.

 

Example:
```
Input: [2,1,5,6,2,3]
Output: 10
```

## 84. 柱状图中最大的矩形
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

<img src="https://assets.leetcode.com/uploads/2018/10/12/histogram.png" style="width: 188px; height: 204px;">


以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

 
<img src="https://assets.leetcode.com/uploads/2018/10/12/histogram_area.png" style="width: 188px; height: 204px;">



图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

 

示例:
```
输入: [2,1,5,6,2,3]
输出: 10
```

## 解题

拿到题目的一瞬间，感觉是滑动窗口的题，但是没有想明白窗口滑动起止的的条件是什么。所以先用暴力拆解法进行两轮循环。

### 解法1
此解法枚举了可能出现长方形的连续柱状图的宽的可能性，高为柱状图中最短那个高。

```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0
    for(let i = 0; i < heights.length; i++) {
        let h = heights[i]
        for (let j = i; j < heights.length; j++) {
            if (heights[j] < h) h = heights[j] // 每次出现最短高时，把最短高赋值给h
            let area = (j - i + 1) * h // 面积为枚举宽 * 找到的最短高
            if (area > maxArea) maxArea = area
        }
    }
    return maxArea
};
```

**复杂度分析：**
- 时间复杂度：O(N^2)，这里 N 是输入数组的长度。
- 空间复杂度：O(1)。

### 解法2
除了枚举宽以外，还可以尝试枚举高，找到该高的左右两边小于它的下标。在进行第一次循环时，向下标i的左侧和右侧循环查找比i高的柱状图，直到不再满足或者超出数组边界，while查找循环结束。
面积即等于比i高的柱状图的集合。
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const N = heights.length
    let maxArea = 0
    for (let i = 0; i < N; ++i) {
        let h = heights[i]
        let left = i - 1, right = i + 1
        while (left >= 0 && heights[left] >= h) {left--} // 循环结束，left值为i的左边，第一个比i小的下标
        while (right < N && heights[right] >= h) {right++} // 循环结束，right值为i的右边，第一个比i小的下标
        let area = h * (right - left - 1) // 面积为枚举高 * 找到的比枚举高都高的柱状图的长度
        if (area > maxArea) maxArea = area
    }
    return maxArea
};
```

**复杂度分析：**
- 时间复杂度：O(N^2)，这里 N 是输入数组的长度。
- 空间复杂度：O(1)。
- 

### 解法3

通过解法2，我们可以进一步优化，用空间来换取时间。解法2中，每次循环时，需要找到比下标i高的连续柱状图，即得出左侧第一个比i低的柱状图的下标left，和第一个比i低的下标right。
因为栈有先进后出的特点，我们可以通过栈，来记录连续推入的的下标值。
1. 首先，我们定义两个数组变量，left和right，用来记录每个i的最左侧和最右侧的比高度小的值，并且填充值分别为-1和n。
1. 然后，我们开始遍历数组。i为遍历的下标变量。
1. 当栈不为空时，我们拿到栈顶元素下标的高度，比i的高度比较，如果栈顶元素的高度大于等于i的高度，就能得出该栈顶元素下标最右侧第一个比它低的下标right值为i，弹出该栈顶元素下标。
1. 循环判断条件，直到栈为空或者栈顶元素下标的高度小于i的高度。
1. 当栈不为空时，说明栈内元素的高度小于当前i的高度，我们可以将当前下标i的最左侧left复制为栈顶元素，再把当前元素推入栈。
1. 遍历完i，我们已经得出每个下标i的左侧第一个比i高度低的下标，和右侧第一个比i高度低的下标。我们只需要再遍历一遍数组，从left和right数组中拿到宽就能得出最大的长方形面积。

```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n = heights.length
    if (n == 0) return 0
    if (n == 1) return heights[0]
    
    const left = Array(n).fill(-1) // 左侧第一个比i低的柱状图的下标left数组，默认为-1
    const right = Array(n).fill(n) // 右侧第一个比i低的柱状图的下标right数组，默认为n
    
    const stack = [] // 栈用来记录每次推入的下标值，先进后出
    const peek = () => stack[stack.length - 1] // 查找栈顶元素的方法，栈顶元素下标的高度会与i的高度做比较
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[peek()] >= heights[i]) { // 栈不为空，且栈顶元素下标高度大于i高度
            right[peek()] = i // 栈顶元素的右侧第一个比i高度小的下标为i
            stack.pop() // 栈顶元素弹出
        }
        if (stack.length > 0) left[i] = peek() // 经过上面的循环，表明栈如果有值，那么左侧第一个比i高度小的下标为栈顶元素
        stack.push(i) // 推入元素
    }
    
    let area = 0
    for (let i = 0; i < n; i++) {
        area = Math.max(area, (right[i] - left[i] - 1) * heights[i])
    }
    return area
};
```

**复杂度分析：**
- 时间复杂度：O(N)，这里 N 是输入数组的长度。
- 空间复杂度：O(N)。

**图解**

<img src="https://assets.leetcode-cn.com/solution-static/84/1.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/2.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/3.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/4.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/5.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/6.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/7.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/8.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/9.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/10.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/11.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/12.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/13.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/14.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/15.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/16.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/17.PNG">
<img src="https://assets.leetcode-cn.com/solution-static/84/18.PNG">

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)