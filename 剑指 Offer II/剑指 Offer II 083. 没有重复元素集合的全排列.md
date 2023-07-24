# 剑指 Offer II 083. 没有重复元素集合的全排列
给定一个不含重复数字的整数数组 nums ，返回其 所有可能的全排列 。可以 按任意顺序 返回答案。

 

示例 1：
```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```
示例 2：
```
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```
示例 3：
```
输入：nums = [1]
输出：[[1]]
```

提示：
```
1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
```

注意：本题与主站 46 题相同：https://leetcode-cn.com/problems/permutations/ 

# 解题
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [], n = nums.length
    dfs(0)
    return ans

    function dfs(start) {
        if (start == n) {
            ans.push(nums.slice())
        }
        for (let i = start; i < n; i++) {
            swap(nums, i, start)
            dfs(start+1)
            swap(nums, i, start)
        }
    }

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]] 
    }
};
```