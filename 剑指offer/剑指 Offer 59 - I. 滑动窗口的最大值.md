# 剑指 Offer 59 - I. 滑动窗口的最大值
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

注意：本题与主站 239 题相同：https://leetcode-cn.com/problems/sliding-window-maximum/


# 解题

**解题1**
1. arr数组用来存放每次窗口的数值
2. 在窗口形成和移动的时候，用Math.max取最大值，加入到res中
3. 最后返回res
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let arr = [], i = 0, res = []
    for(; i < k; i++) {
        arr.push(nums[i])
        if(i == k - 1) res.push(Math.max(...arr))
    }
    for(; i < nums.length; i++) {
        arr.shift()
        arr.push(nums[i])
        res.push(Math.max(...arr))
    }
    return res
};
```

**解题2**

1. 维持一个单项递减的队列。
2. 每次推入队列时，都要比较队列中最后一个值B与推入值A的大小，
3. 如果 B < A, 则需要将B值推出，
4. 循环比较，直到满足 B >= A 停止。
5. 这样队列头部的值就是最大的值。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue = []
    let result = []

    for(let i = 0; i < k; i++) {
        while(queue.length > 0 && queue[queue.length - 1] < nums[i]) {
            queue.pop()
        }
        queue.push(nums[i])
    }
    queue[0] && result.push(queue[0])

    for(let i = k; i < nums.length; i++) {
        if (queue[0] == nums[i - k]) {
            queue.shift()
        } 
        while(queue.length > 0 && queue[queue.length - 1] < nums[i]) {
            queue.pop()
        }
        queue.push(nums[i])
        result.push(queue[0])
    }
    return result
};
```
- 时间复杂度O(N)
- 空间复杂度O(K)

**解题3**
1. 维持一个单项递减的队列，queue存储递减值nums[i]的下标，即queue队列中，nums[queue[0]]是最大值
2. 循环nums数组，如果queue[0]存储的下标值，在窗口区间[i+1-k, i]外，即i + 1 - k > queue[0]，将队列头推出
3. 循环queue队列，比较即将要推入的nums[i]是否比队列尾元素大，如果是，将队列尾推出。
4. 现在queue就是一个单项递减的队列了，将下标推入，
5. 判断长度k窗口形成的下标初始值，即i + 1 >= k，将最大值推入res数组
6. 最后返回res
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [], queue = []
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 - k > queue[0]) queue.shift()
        while(queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop()
        queue.push(i)
        if (i + 1 >= k) res.push(nums[queue[0]])
    }
    return res
};
```
- 时间复杂度O(N)
- 空间复杂度O(K)

