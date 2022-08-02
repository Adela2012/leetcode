# 剑指 Offer II 119. 最长连续序列

给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 

示例 1：
```
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```
示例 2：
```
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
```

提示：
```
0 <= nums.length <= 104
-109 <= nums[i] <= 109
```

进阶：可以设计并实现时间复杂度为 O(n) 的解决方案吗？

注意：本题与主站 128 题相同： https://leetcode-cn.com/problems/longest-consecutive-sequence/

# 解题
1. 找出连续数字的最长序列，我们需要找到该序列的第一个数
2. 在循环nums时，去判断存不存在num-1，如果不存在，则说明num是第一个数
3. 采用while向上循环找打一个数，并记录while循环的次数max。
4. while循环结束，比较ans和max的值，取最大的那个。
```ts
function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let ans = 0
    for (let num of nums) {
        if (!set.has(num-1)) {
            let cur = num
            let max = 1
            while(set.has(++cur)) {
                max++
            }
            ans = Math.max(ans, max)
        }
    }
    return ans
};
```
- 时间复杂度：O(N)
- 空间复杂度：O(N)