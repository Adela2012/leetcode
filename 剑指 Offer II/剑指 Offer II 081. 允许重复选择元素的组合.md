# 剑指 Offer II 081. 允许重复选择元素的组合

给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

 

示例 1：
```
输入: candidates = [2,3,6,7], target = 7
输出: [[7],[2,2,3]]
```
示例 2：
```
输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
```
示例 3：
```
输入: candidates = [2], target = 1
输出: []
```
示例 4：
```
输入: candidates = [1], target = 1
输出: [[1]]
```
示例 5：
```
输入: candidates = [1], target = 2
输出: [[1,1]]
```

提示：
```
1 <= candidates.length <= 30
1 <= candidates[i] <= 200
candidate 中的每个元素都是独一无二的。
1 <= target <= 500
```

注意：本题与主站 39 题相同： https://leetcode-cn.com/problems/combination-sum/

# 解题
搜索回溯：寻找所有可行性解
## 解题1
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = []
    dfs(target, [], 0)
    return ans

    function dfs(num, tmp, i) {
        if (i == candidates.length || num < 0) return
        if (num == 0) {
            ans.push(tmp)
            return
        }
        dfs(num, tmp, i+1)
        const leftNum = num - candidates[i]
        if(leftNum >= 0) {
            dfs(leftNum, [...tmp, candidates[i]], i)
        }
    }
};
```

## 解题2
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [], tmp = []
    dfs(0, 0)
    return ans

    function dfs(sum, start) {
        if (sum > target) return
        if (sum == target) {
            ans.push(tmp.slice())
            return
        }
        for (let i = start; i < candidates.length; i++) {
            const c = candidates[i]
            tmp.push(c)
            dfs(sum + c, i)
            tmp.pop()
        }
    }
};
```