# 剑指 Offer 61. 扑克牌中的顺子
从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

 

示例 1:
```
输入: [1,2,3,4,5]
输出: True
```

示例 2:
```
输入: [0,0,1,2,5]
输出: True
```

限制：
```
数组长度为 5 

数组的数取值为 [0, 13] .
```
# 解题
## 解题1

1. 满足顺子的条件：
   1. 除0外的数字最大值减去最小数不超过5，max - min < 5
   2. 除0外没有重复数字，可采用set来辅助判断
2. 因此在遍历nums时，
   1. 如果是0，继续循环
   2. 如果该值已经被记录在set中，返回false
   3. 将值添加到set中，更新max和min的值
3. 最后返回 max-min < 5
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let set = new Set(), max = 0, min = 13
    for (let num of nums) {
        if (num == 0) continue
        if (set.has(num)) return false
        set.add(num)
        max = Math.max(num, max)
        min = Math.min(num, min)
    }
    return max - min < 5
};
```

> N 为常数 5
- 时间复杂度O(N)=O(5)=O(1)
- 空间复杂度O(N)=O(5)=O(1)

## 解题2
1. 满足顺子的条件：
   1. 除0外的数字最大值减去最小数不超过5
   2. 除0外没有重复数字
2. 进行排序，
   1. 可以得出最大值为nums[4]，最小值为不为0的nums[j]
   2. 判断重复数字，nums[i] == nums[i+1]
3. 最后返回 nums[4]-nums[j] < 5

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    nums.sort((a,b) => a - b)
    let j = 0
    for(let i = 0; i < 4; i++) {
        if (nums[i] == 0) j++
        else if (nums[i] == nums[i+1]) return false
    }
    return nums[4]-nums[j] < 5
};
```
> N 为常数 5
- 时间复杂度O(1)
- 空间复杂度O(1)