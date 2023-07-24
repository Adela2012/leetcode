# 剑指 Offer II 070. 排序数组中只出现一次的数字
给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。

 

示例 1:
```
输入: nums = [1,1,2,3,3,4,4,8,8]
输出: 2
示例 2:

输入: nums =  [3,3,7,7,10,11,11]
输出: 10
```

 

提示:
```
1 <= nums.length <= 105
0 <= nums[i] <= 105
```

进阶: 采用的方案可以在 O(log n) 时间复杂度和 O(1) 空间复杂度中运行吗？


# 解题
## 解题1
抑或运算符可以找出没有重复出现的数字
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let ans = 0
    for (let i of nums) {
        ans ^= i
    }
    return ans
};
```
- 时间复杂度：O(N)
- 空间复杂度：O(1)

## 解题2
数组是有序数组，因此，可以采用二分查找
