# 剑指 Offer II 007. 数组中和为 0 的三个数

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

 

示例 1：
```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```
示例 2：
```
输入：nums = []
输出：[]
```
示例 3：
```
输入：nums = [0]
输出：[]
```
 

提示：
```
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
```
 

注意：本题与主站 15 题相同：https://leetcode-cn.com/problems/3sum/

# 解题
1. 三数之和为0，我们可以将题转化为：先固定一个数，然后求两数之和
2. 首先处理边界值，题目中nums的数组可以为空，因此对数组长度小于3的情况，直接返回[]
3. 将数组进行从小到大排序
4. 固定住i位，在右边数组中求两数之和 target = -nums[i]
5. 双指针，left，right，分别指向求两数之和区间的首位[i + 1, nums.length - 1]
   1. 当nums[left] + nums[right] < target，left++
   2. 当nums[left] + nums[right] > target，right--
   3. 当nums[left] + nums[right] == target，将答案推入res，并执行left++，right--
6. 两个地方去重
   1. 循环固定i位时，若发现i位值与前位相同，即 nums[i] == nums[i - 1] ，直接跳过
   2. 当找到答案时，如果left位值与下一位相同，执行left++，直到不相等，同理right
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [] 
    nums.sort((a,b) => a - b)
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        let target = -nums[i]
        let left = i + 1, right = nums.length - 1
        while(left < right) {
            if (nums[left] + nums[right] == target) {
                res.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] == nums[++left]);
                while(left < right && nums[right] == nums[--right]);
            } else if (nums[left] + nums[right] < target) {
                left++
            } else {
                right--
            }
           
        } 
    }
    return res
};
```
- 时间复杂度O(N^2)
- 空间复杂度O(1)