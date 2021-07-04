# 剑指 Offer 56 - II. 数组中数字出现的次数 II
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

 

示例 1：
```
输入：nums = [3,4,3,3]
输出：4
```
示例 2：
```
输入：nums = [9,1,7,9,7,9,7]
输出：1
```

限制：
```
1 <= nums.length <= 10000
1 <= nums[i] < 2^31
```
# 解题

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0, twos = 0
    for(let i of nums) {
        ones = ones ^ i & ~twos
        twos = twos ^ i & ~ones
    }
    return ones
};
```


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    for (let j = 0; j < 32; j++) {
        let count = 0
        let bit = 1 << j
        for (let i of nums) {
            if (i & bit) count++
        }
       if (count % 3 != 0) res |= bit
    }
    return res

};
```
