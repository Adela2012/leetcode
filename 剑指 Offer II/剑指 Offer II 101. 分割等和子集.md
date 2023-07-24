# 剑指 Offer II 101. 分割等和子集
给定一个非空的正整数数组 nums ，请判断能否将这些数字分成元素和相等的两部分。

 

示例 1：
```
输入：nums = [1,5,11,5]
输出：true
解释：nums 可以分割成 [1, 5, 5] 和 [11] 。
```
示例 2：
```
输入：nums = [1,2,3,5]
输出：false
解释：nums 不可以分为和相等的两部分
```

提示：
```
1 <= nums.length <= 200
1 <= nums[i] <= 100
```

注意：本题与主站 416 题相同： https://leetcode-cn.com/problems/partition-equal-subset-sum/


# 解题
## 解题1
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0, maxNum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (nums[i] > maxNum) maxNum = nums[i]
    }
    if (sum & 1) return false
    let target = sum >> 1
    if (maxNum > target) return false
    const dp = new Array(nums.length).fill(0).map(() => new Array(target + 1).fill(0))
    for (let i = 0; i < nums.length; i++) {
        dp[i][0] = true
    }
    dp[0][nums[0]] = true
    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j <= target; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= nums[i] && !dp[i][j]) {
                dp[i][j] = dp[i-1][j - nums[i]]
            }
        }
    }
    return dp[nums.length-1][target]

};
```
## 解题2
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0, maxNum = 0
    for (let num of nums) {
        sum += num
        if (num > maxNum) maxNum = num
    }
    if (sum & 1) return false
    let target = sum >> 1
    if (maxNum > target) return false
    const dp = new Array(target + 1).fill(false)
    dp[0] = true
    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] |= dp[j - num]
        }
    }
    return dp[target]

};
```