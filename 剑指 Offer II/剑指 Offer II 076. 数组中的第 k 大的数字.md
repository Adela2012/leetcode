# 剑指 Offer II 076. 数组中的第 k 大的数字
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

 

示例 1:
```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```
示例 2:
```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```
 

提示：
```
1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104
```

注意：本题与主站 215 题相同： https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

# 解题
## 解题1
Array.sort从大到小排序，并取值
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a)
    return nums[k - 1]
};
```

## 解题2
推排序，类似的题目有：剑指 Offer II 059. 数据流的第 K 大数值
1. 思路是维持一个单调递减堆stack
2. 循环nums数组，
3. 判断堆顶元素是否小于数组元素n，满足，则推入tmp中
4. 直到stack为空或不满足上一步判断
5. 如果stack的长度小于k，则推入n
6. 如果stack的长度还小于k，并tmp有值，持续将tmp中的值填入stack
7. 最后返回stack栈顶元素

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let stack = []

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i], tmp = []
        while(stack.length && stack[stack.length - 1] < n) {
            tmp.push(stack.pop())
        }
        if (stack.length < k) stack.push(n)
        while(tmp.length && stack.length < k) {
            stack.push(tmp.pop())
        }
    }
    return stack[stack.length - 1]
};
```
- 时间复杂度：O(NK)，N = nums.length，K = k
- 空间复杂度：O(K)

## 解题3
快速排序，从大到小，取数组下标k-1的元素，即为所求。
因为题目只要求第K大的数字，所以不需要全部排序，只需要比较左右分的下标pos和k-1的大小，对部分区间进行排序即可
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    quickSort(0, nums.length - 1)
    return nums[k-1]

    function quickSort(left, right) {
        if (left < right) {
            let pos = partition(left, right)
            if (pos < k-1)  quickSort(pos + 1, right)
            if (pos > k-1)  quickSort(left, pos - 1)
        }
    }

    function partition(left, right) {
        const pivot = nums[right]
        let i = left
        for(let j = left; j < right; j++) {
            if (nums[j] >= pivot) {
                swap(i++, j)
            }
        }
        swap(i, right)

        return i
    }

    function swap(i, j) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j]  = tmp
    }
};
```
