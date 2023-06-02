# 剑指 Offer II 061. 和最小的 k 个数对

给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。

定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

 

示例 1:
```
输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
输出: [1,2],[1,4],[1,6]
解释: 返回序列中的前 3 对数：
    [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
```
示例 2:
```
输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
输出: [1,1],[1,1]
解释: 返回序列中的前 2 对数：
     [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
```
示例 3:
```
输入: nums1 = [1,2], nums2 = [3], k = 3 
输出: [1,3],[2,3]
解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
```

提示:
```
1 <= nums1.length, nums2.length <= 104
-109 <= nums1[i], nums2[i] <= 109
nums1, nums2 均为升序排列
1 <= k <= 1000
```

注意：本题与主站 373 题相同：https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/

# 解题
## 解题1
1. 暴力破解，循环nums1和nums2，将可能存在的结果存在map中。
2. 将map转换为数组，并使用Array.sort进行和从小到大排序，并通过Array.slice截取前k个数。

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const map = new Map()
    for(let i of nums1) {
        for (let j of nums2) {
            map.set([i + j], [i, j])
        }
    }
    return [...map].sort((a,b) => a[0][0] - b[0][0]).map(i => i[1]).slice(0, k)
};
```
- 时间复杂度：O(NlogN)，N = nums1.length * nums2.length
- 空间复杂度：O(N)