# 剑指 Offer II 084. 含有重复元素集合的全排列 


给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。

 

示例 1：
```
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 ```
示例 2：
```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

提示：
```
1 <= nums.length <= 8
-10 <= nums[i] <= 10
```

注意：本题与主站 47 题相同： https://leetcode-cn.com/problems/permutations-ii/

# 解题
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ans = []
    dfs(0)
    return ans

    function dfs(start) {
        if(start == nums.length) {
            ans.push(nums.slice())
            return
        }

        const visited = new Set()
        for (let i = start; i < nums.length; i++) {
            if (visited.has(nums[i])) continue
            visited.add(nums[i])
            swap(nums, start, i)
            dfs(start+1)
            swap(nums, start, i)
        }
    }

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]] 
    }
};
```