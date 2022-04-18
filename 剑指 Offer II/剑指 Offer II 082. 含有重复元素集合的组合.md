# 剑指 Offer II 082. 含有重复元素集合的组合

给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。 

 

示例 1:
```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```
示例 2:
```
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
```

提示:
```
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
```

注意：本题与主站 40 题相同： https://leetcode-cn.com/problems/combination-sum-ii/

# 解题
搜索回溯：寻找所有可行性解
1. 首先将数组从小到大排序
2. 深度优先搜索方法传入参数：搜索下标start，剩余数量num
   1. 当num为0时，将数组的复制加入到ans中，并停止
   2. 从start下标开始循环剩余的数组元素
      1. 剪枝：计算减去当前元素后，剩余的值leftNum，如果小于0，跳出循环
      2. 剪枝：题目要求不包含重复元素，因此如果跟前一个元素相同时，继续下一个循环
      3. 将元素记录在tmp中，并开启下个循环，后将该元素从tmp中移除
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    const ans = [], tmp = []
    dfs(0, target)
    return ans

    function dfs(start, num) {
        if (num == 0) {
            ans.push(tmp.slice())
            return
        }
        for (let i = start; i < candidates.length; i++) {
            const leftNum = num - candidates[i]
            if (leftNum < 0) break
            if (i > start && candidates[i] == candidates[i - 1]) continue
            tmp.push(candidates[i])
            dfs(i+1, leftNum)
            tmp.pop()
        }
    }

};
```