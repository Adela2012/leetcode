# 494. Target Sum
Medium

You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.


## 494. 目标和
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例 1:

输入: nums: [1, 1, 1, 1, 1], S: 3
输出: 5
解释: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
注意:

数组非空，且长度不会超过20。
初始的数组的和不会超过1000。
保证返回的最终结果能被32位整数存下。

## 解题
- brute force + recursive
- map + DP + recursive
- map + DP + non-recursion


### brute force + recursive
1. 对于每一个元素，都进行递归计算。
1. 从下标为0开始，每一次递归，下标都前进一格，并得出前几次+/-之和。
1. 当下标为数组长度时，判断总和与目标和是否相等，相等则count数量+1。
- 复杂度分析
    - 时间复杂度：O(2^N)，其中 N 是数组 nums 的长度。
    - 空间复杂度：O(N)，为递归使用的栈空间大小。
```javascript
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let count = 0
  calculate(nums, 0, 0, S)
  return count
  
  function calculate(nums, i, sum, S) {
      if (i == nums.length) {
          sum == S && count++
      } else {
          calculate(nums, i + 1, sum + nums[i], S)
          calculate(nums, i + 1, sum - nums[i], S)
      }
  }
};
```


### map + DP + recursive
1. 我们用map的key代表是**数组元素i+组成和sum**，用value代表这种情况下**有几种可能性**。
1. 递归，判断map是否已有key，有的话返回value，判断下标是否为数组长度，并判断总和与目标和是否相等，相等返回1，否则返回0。
1. 考虑第 i 个数 nums[i]，它可以被添加 + 或 -，因此状态转移：
```javascript
let j = i + 1, sum1 = sum + nums[i], sum1 = sum - nums[i]
map[i+','+sum] = map[j+','+sum1]+map[j+','+sum2]
```
- 复杂度分析
    - 时间复杂度：O(N∗sum)，其中 N 是数组 nums 的长度。
    - 空间复杂度：O(sum)。
```javascript
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S, i = 0, sum = 0, map = new Map()) {
  let key = i + ',' + sum
  if (map.has(key)) return map.get(key)
  if (i === nums.length) return sum === S ? 1 : 0
  let way = findTargetSumWays(nums, S, i + 1, sum + nums[i], map) + findTargetSumWays(nums, S, i + 1, sum - nums[i], map)
  map.set(key, way)
  return way
};
```


### map + non-recursion + DP
1. 使用map，将初始和设置为零，其计数设置为1。
1. 遍历数组中的每个数字，并根据前面map中的总和/数量计算下一个总和。

```javascript
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let sums = new Map([[0, 1]])
  for (let num of nums) {
    const next = new Map()
    for (let [sum, amount] of sums) {
      const plus = sum + num
      const minus = sum - num

      next.set(plus, next.has(plus) ? next.get(plus) + amount : amount)
      next.set(minus, next.has(minus) ? next.get(minus) + amount : amount)
    }
    sums = next
  }
  return sums.has(S) ? sums.get(S) : 0
};
```
### 来源：
- [力扣（LeetCode）](https://leetcode-cn.com/problems/target-sum)