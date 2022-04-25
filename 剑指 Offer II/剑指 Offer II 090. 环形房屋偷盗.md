# 剑指 Offer II 090. 环形房屋偷盗
一个专业的小偷，计划偷窃一个环形街道上沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

 

示例 1：
```
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```
示例 2：
```
输入：nums = [1,2,3,1]
```
输出：4
```
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```
示例 3：
```
输入：nums = [0]
输出：0
```

提示：
```
1 <= nums.length <= 100
0 <= nums[i] <= 1000
```

注意：本题与主站 213 题相同： https://leetcode-cn.com/problems/house-robber-ii/

# 解题
1. 如果最优解从nums[0]开始，那么nums[nums.length-1]不包含在内
2. 如果最优解从nums[1]开始，那么nums[nums.length-1]包含在内
3. 所以我们从下标[start,end]，分别得出下标0和1开始的最优解，返回最大的那个
   1. 公式：f(i) = Math.max(nums(i) + f(i - 2), f(i - 1))
   2. 使用cur当前i循环前代表i-1可得到的最大现金，pre代表i-2可得到的最大现金，
   3. 从i=start+2开始，迭代计算cur和pre的值。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if (n == 1) return nums[0]
    if (n == 2) return Math.max(nums[1], nums[0])
    return Math.max(robRange(0, n - 2), robRange(1, n - 1))

    function robRange(start, end) {
        let pre = nums[start], cur = Math.max(pre, nums[start+1])
        for (let i = start + 2; i <= end; i++) {
            let tmp = Math.max(pre + nums[i], cur)
            pre = cur
            cur = tmp
        } 
        return cur
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)