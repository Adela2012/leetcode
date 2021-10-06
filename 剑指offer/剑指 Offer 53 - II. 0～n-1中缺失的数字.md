# 剑指 Offer 53 - II. 0～n-1中缺失的数字

剑指 Offer 53 - II. 0～n-1中缺失的数字
一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

 

示例 1:
```
输入: [0,1,3]
输出: 2
```
示例 2:
```
输入: [0,1,2,3,4,5,6,7,9]
输出: 8
```

限制：
```
1 <= 数组长度 <= 10000
```

# 解题
比较简单的方法是从左到右遍历数组，知道nums[i] !== i, 就能找出缺失的那个数i，这种方法的时间复杂度是O(N)，最好的情况第一个就找到，最坏的情况需要遍历到数组的最后。


1. 题目中说了是排序数组，可以用二分查找的方法去找到这个数值。
2. 如果mid == nums[mid]，说明缺失的值还在右子数组[mid + 1, right]，则 left = mid + 1。
3. 其他的情况下，也就是 mid > nums[mid]，说明缺失的值还在左子数组[left, mid - 1]，则 right = mid - 1。
4. 时间复杂度 O(log N)， 空间复杂度 O(1)。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0, right = nums.length - 1, mid
    while(left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (nums[mid] == mid) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};
```