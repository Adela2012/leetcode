# 剑指 Offer II 093. 最长斐波那契数列
如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：

n >= 3
对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
给定一个严格递增的正整数数组形成序列 arr ，找到 arr 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。

（回想一下，子序列是从原序列  arr 中派生出来的，它从 arr 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）

 

示例 1：
```
输入: arr = [1,2,3,4,5,6,7,8]
输出: 5
解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。
```
示例 2：
```
输入: arr = [1,3,7,11,12,14,18]
输出: 3
解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。
```

提示：
```
3 <= arr.length <= 1000
1 <= arr[i] < arr[i + 1] <= 10^9
``` 

注意：本题与主站 873 题相同： https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/


# 解题
1. map记录arr元素和下标的映射
2. 从第二个数开始遍历，得出arr[i]前的每个元素的arr[j]的差值，下标查找为`k=map.get(arr[i] - arr[j])`
    1. 如果差值存在，此时`0 <= k < j < i`，说明形成斐波那契式序列，`f(i,j) = f(j,k) + 1`
    2. 如果不存在，则形成初始的斐波那契式序列，`f(i,j) = 2`
    3. 每次都比较ans值大小，并更新
3. 斐波那契式的长度必须大于2，所以如果ans小于2时，返回0
```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length, map = new Map()
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for(let i = 0; i < n; i++) {
        map.set(arr[i], i)
    }

    let ans = 0
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const k = map.get(arr[i] - arr[j])
            dp[i][j] = k >= 0 && k < j ? dp[j][k] + 1 : 2
            if (ans < dp[i][j]) ans = dp[i][j]
        }
    }
    return ans > 2 ? ans : 0
};
```
- 时间复杂度：O(n^2)
- 空间复杂度：O(n^2)