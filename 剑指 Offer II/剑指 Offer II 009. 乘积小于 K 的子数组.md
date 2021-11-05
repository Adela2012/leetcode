# 剑指 Offer II 009. 乘积小于 K 的子数组
给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。

 

示例 1:
```
输入: nums = [10,5,2,6], k = 100
输出: 8
解释: 8 个乘积小于 100 的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
```
示例 2:
```
输入: nums = [1,2,3], k = 0
输出: 0
```

提示: 
```
1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
```

注意：本题与主站 713 题相同：https://leetcode-cn.com/problems/subarray-product-less-than-k/ 


# 解题
1. 滑动窗口，双指针left和right，首先都指向数组头部，即left = 0, right = 0，
2. 右指针至数组尾部，跳出循环，
   1. 每个循环，将nums[right]累乘至total上，
   2. 循环比较total >= target，
      1. 如果满足，则更新total的值，total /= nums[left]，
      2. 将窗口变小，执行left++，
   3. 当total < target 并且 left <= right，将新增窗口数量加至res中，
      1. res += right - left + 1的理解：
      2. 例如nums = [10,5,2,6]， k = 100，
      3. left = 0，right = 0，这个时候新增的窗口[10]，数量为1，
      4. 右移right，left = 0, right = 1，这个时候新增的窗口[10,5][5]，数量为2，
      4. 右移right，left = 0, right = 2，这个时候新增的窗口[10,5,2][5,2][2]，数量为3，
      5. 窗口在原来的基础上，加上新增的值，为right-left+1，
   4. 将窗口扩大，执行right++，
3. 最后返回res
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0, total = 1, left = 0, right = 0
    while(right < nums.length) {
        total *= nums[right]
        while(left <= right && total >= k)  {
            total /= nums[left++]
        }
        if (left <= right) {
            res += right - left + 1
        }
        right++
    }
    return res
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)