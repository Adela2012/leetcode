
# 剑指 Offer 03. 数组中重复的数字
找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
 

限制：

2 <= n <= 100000


# 解题
## 解题1
通过额外空间set的方式，记录遍历过的数，只要重复的数在set中出现过，那么就表示找到这个数了。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let map = new Set()
    for(let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return nums[i]
        } 
        map.add(nums[i])
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)


## 解题2
因为题目中所有数字都在 0～n-1 的范围内，所以除了重复数以外，每个下标都对应一个数字，那么可以通过原地交换的方式，来判断重复数字。
1. 如果 **下标数i** 跟 **数字n** 相等，那么判断下个数i++
2. 如果不相等，比较 **数字n** 与 **数字n下标的值m** 是否相等
3. 如果相等，说明找到了重复的数字
4. 如果不相等，则交换 **下标i** 和 **下标n** 的值
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for(let i = 0; i < nums.length;) {
        let n = nums[i], m = nums[n]
        if (n == i) {
            i++
            continue
        } 
        if (n == m) {
            return n
        }
        swap(i, n)
    }

    function swap(i, j) {
        let tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp 
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)