# 剑指 Offer II 057. 值和下标之差都在给定的范围内

给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。

 

示例 1：

```
输入：nums = [1,2,3,1], k = 3, t = 0
输出：true
```

示例 2：

```
输入：nums = [1,0,1,1], k = 1, t = 2
输出：true
```

示例 3：

```
输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false
```

提示：
```
0 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 104
0 <= t <= 231 - 1
```

注意：本题与主站 220 题相同： https://leetcode-cn.com/problems/contains-duplicate-iii/

# 解题
桶排序
1. 将nums数组切分成块状（桶），长度为t+1（因为题目中`abs(nums[i] - nums[j]) <= t`为小于等于号）。
2. 遍历nums数组，通过getID得到nums[i]在排序中的序号。
   1. 首先判断这个桶中有没有放入过数，即  map.has(id)，有则返回true
   2. 如果是相邻桶，则通过map.get从相邻桶中拿出数，比较大小，有则返回true
   3. 将桶id记录在map中
   4. 并且当i >= k时，将已经不需要比较的桶从map中删除

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i]
        const id = getID(x)

        if (map.has(id)) return true
        if (map.has(id - 1) && x - map.get(id - 1) <= t) return true
        if (map.has(id + 1) && map.get(id + 1) - x <= t) return true

        map.set(id, x)
        if (i >= k) map.delete(getID(nums[i - k]))
    }
    return false


    function getID(x) {
        const w = t + 1
        return x > 0 ? Math.floor(x / w) : Math.floor((x + 1) / w) - 1
    }
};
```
- 时间复杂度O(N)，N = nums.length
- 空间复杂度O(K)，K = Math.min(nums.length, k + 1)