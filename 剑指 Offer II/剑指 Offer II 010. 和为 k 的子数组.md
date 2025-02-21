# 剑指 Offer II 010. 和为 k 的子数组
给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。

 

示例 1 :
```
输入:nums = [1,1,1], k = 2
输出: 2
解释: 此题 [1,1] 与 [1,1] 为两种不同的情况
```
示例 2 :
```
输入:nums = [1,2,3], k = 3
输出: 2
```

提示:
```
1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
```
 

注意：本题与主站 560 题相同： https://leetcode-cn.com/problems/subarray-sum-equals-k/


# 解题
1. 因为此题nums[i]范围有负数，且不是递增数组，因此不能使用滑动窗口方法
2. 使用额外空间map来存储连续子数组的sum值和对应个数
   1. 设置前缀值，sum=0时，对应的个数是1
   2. 累加下标从[0,i]，每个区间的sum值和对应个数，并存入map中
   3. 在每次循环时，累加sum，并查找前面有没有 sum-k 的值，如果有，加到res中
3. 最后返回res
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map([[0,1]]) // 和为0的子数组个数为1
    let sum = 0, res = 0
    for (let n of nums) {
        sum += n
        res += map.get(sum - k) || 0
        map.set(sum, (map.get(sum) || 0)+1)
    }
    return res
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)