# 剑指 Offer 42. 连续子数组的最大和
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:
```
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
``` 

提示：
```
1 <= arr.length <= 10^5
-100 <= arr[i] <= 100
```

# 解题
动态规划求解：采用两个变量，sum记录以num[i]结尾的连续子数组最大和，res记录最大值。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum =  0, res = nums[0]
    for(let i of nums) {
        sum = Math.max(i, sum + i)
        res = Math.max(res, sum)
        
    }
    return res
};
```


- 时间复杂度：O(MN)
- 空间复杂度：O(1)