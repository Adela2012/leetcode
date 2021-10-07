# 剑指 Offer 53 - I. 在排序数组中查找数字 I

统计一个数字在排序数组中出现的次数。

 

示例 1:
```
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
```
示例 2:
```
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```

限制：
```
0 <= 数组长度 <= 50000
```

# 解题
nums 是一个非递减数组，可以使用二分查找的方法确定target的下标，再从左，从右计算该值出现的次数。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1, mid, count = 0
    while(left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else if(nums[mid] > target) {
            right = mid - 1
        } else {
            count = 1
            break
        }
    }
    let i = mid - 1, j = mid + 1
    while (nums[i] == target && i >= 0) {
        count++
        i--
    }
    while (nums[j] == target && j < nums.length) {
        count++
        j++
    }
    return count
};
```

- h函数找到tar的右边边界下标
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return h(target) - h(target - 1)

    function h (tar) {
        let i = 0
        let j = nums.length - 1
        while(i <= j) {
            let mid = i + j >> 1
            if (nums[mid] <= tar) {
                i = mid + 1
            } else {
                j = mid - 1
            }

        }
        return i
    }
};
```

- 时间复杂度： O(logn)
- 空间复杂度：O(1)