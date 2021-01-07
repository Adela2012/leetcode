## 1539. Kth Missing Positive Number
Easy

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

 

Example 1:
```
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
```

Example 2:
```
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
```

Constraints:
```
1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
```


![logo](https://pic.leetcode-cn.com/1609555286-CFfWVm-file_1609555286133){:width="0" height="0" align="left"}

## 1539. 第 k 个缺失的正整数
给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。

请你找到这个数组里第 k 个缺失的正整数。

 

示例 1：
```
输入：arr = [2,3,4,7,11], k = 5
输出：9
解释：缺失的正整数包括 [1,5,6,8,9,10,12,13,...] 。第 5 个缺失的正整数为 9 。
```
示例 2：
```
输入：arr = [1,2,3,4], k = 2
输出：6
解释：缺失的正整数包括 [5,6,7,...] 。第 2 个缺失的正整数为 6 。
```

提示：
```
1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
对于所有 1 <= i < j <= arr.length 的 i 和 j 满足 arr[i] < arr[j] 
```



## 解法1
解法1，就是把缺失的数字和数组的长度的值，从1开始做一个遍历，如果不在该数组里，那么这个i就是缺失的值。直到num的累计缺失值与k相等，那么我们遍历到的i就是缺失的值。时间复杂度为O(n)。
```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num = 0
    for (let i = 1; i <= arr.length + k; i++ ) {
        if (arr.indexOf(i) < 0) {
            num++
        }
        if (num == k) {
            return i
        }
    }
};
```

**复杂度分析**
- 时间复杂度：O(n)，其中 n 为 输入 arr 数组的长度加上k。
- 空间复杂度：O(1)。

## 解法2
一般时间复杂度为O(n)的这种顺序查找，都可以用二分来优化一下，将时间复杂度降至O(logn)。其中 `arr[mid] - (1 + mid)` 就是缺失正整数的数量，与k进行比较，就能得出左边界 left 和有边界 right 的临界值。

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let left = 0, right = arr.length, mid
    while (left < right) {
        mid = (left + right) >> 1
        if (arr[mid] - 1 - mid < k) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left + k
};
```

**复杂度分析**
- 时间复杂度：O(logn)，其中 n 为 输入 arr 数组的长度。
- 空间复杂度：O(1)。