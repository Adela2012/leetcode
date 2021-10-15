# 剑指 Offer 57. 和为s的两个数字

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 

示例 1：
```
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
```
示例 2：
```
输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
```
 

限制：
```
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6
```

# 解题
## 解题1
1. 循环nums数组，使用set记录匹配当前数字i所需要的值target-i，
2. 如果遍历的时候，发现当前数字i在set中，那么直接返回[target - i, i]

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let set = new Set()
    for (let i of nums) {
        if (set.has(i)) {
            return [target - i, i]
        }
        set.add(target - i)
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)

## 解题2
1. 头尾指针
2. 题目说明是递增排序的数组，可以从头尾开始缩小范围
3. i指向头，j指向尾，i < j 循环继续 
4. 变量s表示头尾数值之和
   1. 若 s == target，返回[nums[i], nums[j]]
   2. 若 s < target，i++
   3. 若 s > target，j--
5. 循环结束，没有找到，返回空数组
   
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0, j = nums.length - 1
    while(i < j) {
        let s = nums[i] + nums[j]
        if (s == target) return [nums[i], nums[j]]
        else if(s > target) j--
        else i++
    }
    return []
};
```

- 时间复杂度O(N)
- 空间复杂度O(1)