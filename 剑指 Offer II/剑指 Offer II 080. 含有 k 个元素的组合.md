# 剑指 Offer II 080. 含有 k 个元素的组合
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

 

示例 1:
```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```
示例 2:
```
输入: n = 1, k = 1
输出: [[1]]
```

提示:
```
1 <= n <= 20
1 <= k <= n
```

注意：本题与主站 77 题相同： https://leetcode-cn.com/problems/combinations/

# 解题
## 解题1
1. 递归的方法，来枚举包含i和不包含i的两种情况
2. 当tmp的长度等于k时，说明是我们所求的答案，记录并返回
3. 当tmp的长度加上区间[i, n]的长度小于k时，说明后续递归不可能有长度为k的tmp，返回

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const tmp = [], ans = []
    dfs(1)
    return ans

    function dfs(i) {
        if (tmp.length + (n - i + 1) < k) return
        if (tmp.length == k) {
            ans.push(tmp.slice())
            return
        }

        tmp.push(i)
        dfs(i + 1)
        tmp.pop()
        dfs(i + 1)

    }
};
```

## 解题2
```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const tmp = [], ans = []
    for(let i = 1; i <= k; i++) {
        tmp.push(i)
    }
    tmp.push(n+1)

    let j = 0
    while(j < k) {
       
        ans.push(tmp.slice(0, k))
        j = 0 
        while(j < k && tmp[j] + 1 == tmp[j+1]) {
            tmp[j] = j + 1
            ++j
        }
        ++tmp[j]
    }
    return ans
};
```