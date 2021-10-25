# 剑指 Offer 56 - I. 数组中数字出现的次数
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

 

示例 1：
```
输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
```
示例 2：
```
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
```

限制：
```
2 <= nums.length <= 10000
```

# 解题
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let x = 0, y = 0, n = 0, m = 1
    for (let i of nums) {
        n ^= i
    }
    while((m & n) == 0) {
        m <<= 1 // 获取 x^y 的 1 的位置，根据此将nums数组划分为两组
    }
    for (let i of nums) {
        if (m & i) x ^= i
        else y ^= i
    }
    return [x, y]
};
```