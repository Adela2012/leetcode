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

- 此题的核心就是维持一个单项递减的队列。
- 每次推入队列时，都要比较队列中最后一个值B与推入值A的大小，如果 B < A, 则需要将B值推出，循环比较，直到满足 B >= A 停止。
- 这样队列头部的值就是最大的值。
- 解题1和解题2的区别就是，解题1的队列中存的是nums[i]，解题2的队列中存的是i，因此解题2可以通过判断i的值来判断是否在窗口。


**解题1**
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
**解题2**

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [], queue = []
    for (let i = 0; i < nums.length; i++) {
        if (i - k + 1 > queue[0]) queue.shift()
        while(queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop()
        }
        queue.push(i)
        if (i >= k - 1 && queue[0]>=0) result.push(nums[queue[0]])
    }
    return result
};
```