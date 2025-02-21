# 剑指 Offer II 011. 0 和 1 个数相同的子数组
给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

 

示例 1:
```
输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
```
示例 2:
```
输入: nums = [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。
```

提示：
```
1 <= nums.length <= 105
nums[i] 不是 0 就是 1
```

注意：本题与主站 525 题相同： https://leetcode-cn.com/problems/contiguous-array/

# 解题
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map([[0, -1]]) // 和为0的下标-1
    let sum = 0, maxLen = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] ? 1 : -1
        // 如果当前位置出现和前面一样的sum，说明中间一定经过了相同数量的0和1
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum))
        } else {
            map.set(sum, i)
        }
    }
    return maxLen
};
```