# 剑指 Offer II 008. 和大于等于 target 的最短子数组
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：
```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```
示例 2：
```
输入：target = 4, nums = [1,4,4]
输出：1
```
示例 3：
```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```
 

提示：
```
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
```

进阶：

如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(nlog(n)) 时间复杂度的解法。
 

注意：本题与主站 209 题相同：https://leetcode-cn.com/problems/minimum-size-subarray-sum/

# 解题
1. 滑动窗口，双指针left和right，首先都指向数组头部，即left = 0, right = 0
2. 右指针至数组尾部，跳出循环
   1. 每个循环，将nums[right]累加至sum上，
   2. 循环比较sum >= target，
      1. 如果满足，则更新res的值，
      2. 同时将窗口变小，sum减去nums[left]，并执行left++，
   3. 将窗口扩大，执行right++
3. 最后返回res
```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, sum = 0, res = Number.MAX_VALUE
    while(right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            res = Math.min(res, right - left + 1)
            sum -= nums[left++]
        } 
        right++
    }
    return res == Number.MAX_VALUE ? 0 : res
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)