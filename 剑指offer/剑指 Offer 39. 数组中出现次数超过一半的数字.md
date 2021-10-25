# 剑指 Offer 39. 数组中出现次数超过一半的数字
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:
```
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
 ```

限制：
```
1 <= 数组长度 <= 50000
```
 

注意：本题与主站 169 题相同：https://leetcode-cn.com/problems/majority-element/

# 解题
**方法1**
- 哈希表统计
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map(), max = 1, val = nums[0]
    for (let i of nums) {
        let num = map.get(i) || 0 
        if (++num > max) {
            max = num
            val = i
        }
        map.set(i, num)
    }
    return val
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)

**方法2**
- 摩尔投票：票数正负抵消
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cur, voted = 0
    for (let i of nums) {
        if (voted == 0) cur = i
        voted += cur == i ? 1 : -1
    }
    return cur
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)