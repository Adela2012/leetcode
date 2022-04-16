# 剑指 Offer II 079. 所有子集


给定一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：
```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```
示例 2：
```
输入：nums = [0]
输出：[[],[0]]
```

提示：
```
1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同
```

注意：本题与主站 78 题相同： https://leetcode-cn.com/problems/subsets/

# 解题

## 解题1
1. 我们使用二进制来表示，nums该下标是否存在，
2. 1表示在，0表示不在。
3. 当nums = [1,2,3]时

二进制位数  | 子集 | 二进制代表的数
:--|:--|:--
000 | [] | 0 
001 | [1] | 1 
010 | [2] | 2 
011 | [1,2] | 3 
100 | [3] | 4 
101 | [1,3] | 5 
110 | [2,3] | 6 
111 | [1,2,3] | 7 

4. 让mask从[0-7]开始循环，用数组长度n表述范围[0, 1 << n)
5. 针对具体mask，从0到n-1，用&得到第i位，如果为1，则将nums[i]推入tmp中


```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length, ans = [], count = 1 << n
    for (let mask = 0; mask < count; mask++) {
        const tmp = []
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                tmp.push(nums[i])
            }
        }
        ans.push(tmp)
    }
    return ans
};
```
- 时间复杂度：O(N2^N)，N = nums.length
- 空间复杂度：O(N)

## 解题2
递归来实现子集枚举
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [], t = []
    dfs(0)
    return ans

    function dfs (cur) {
        if (cur === nums.length) {
            ans.push(t.slice())
            return
        }
        t.push(nums[cur])
        dfs(cur + 1)
        t.pop()
        dfs(cur+1)
    }
};
```
- 时间复杂度：O(N2^N)，N = nums.length
- 空间复杂度：O(N)