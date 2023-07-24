# 剑指 Offer II 102. 加减的目标值

给定一个正整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

 

示例 1：
```
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
```
示例 2：
```
输入：nums = [1], target = 1
输出：1
```

提示：
```
1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000
```

注意：本题与主站 494 题相同： https://leetcode-cn.com/problems/target-sum/

# 解题
## 解题1
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0
    dfs(0, 0)
    return count

    function dfs(i, sum) {
        if (i == nums.length) {
            if (sum == target) count++
        } else {
            dfs(i+1, sum + nums[i])
            dfs(i+1, sum - nums[i])
        }
    }
};
```
- 时间复杂度：O(2^n)
- 空间复杂度：O(n)

## 解题2
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    const diff = sum - target, n = nums.length
    if (diff < 0 || (diff & 1)) {
        return 0
    }
    let neg = diff >> 1
    const dp = new Array(n+1).fill(0).map(() => new Array(neg+1).fill(0))
    dp[0][0] = 1
    for (let i = 1; i <= n; i++)  {
        for (let j = 0; j <= neg; j++) {
            dp[i][j] = dp[i-1][j]
            if (j >= nums[i-1]) dp[i][j] += dp[i-1][j-nums[i-1]]
        }
    }
    return dp[n][neg]
};
```
- 时间复杂度：O(NM)，N = nums.length，M = sum(nums) - target
- 空间复杂度：O(NM)

## 解题3
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    const diff = sum - target
    if (diff < 0 || (diff & 1)) {
        return 0
    }
    let neg = diff >> 1
    const dp = new Array(neg+1).fill(0)
    dp[0] = 1
    for (const num of nums)  {
        for (let j = neg; j >= num; j--) {
            dp[j] += dp[j-num]
        }
    }
    return dp[neg]
};
```
- 时间复杂度：O(NM)，N = nums.length，M = sum(nums) - target
- 空间复杂度：O(M)