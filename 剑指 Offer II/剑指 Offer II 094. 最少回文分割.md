# 剑指 Offer II 094. 最少回文分割

给定一个字符串 s，请将 s 分割成一些子串，使每个子串都是回文串。

返回符合要求的 最少分割次数 。

 

示例 1：
```
输入：s = "aab"
输出：1
解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
```
示例 2：
```
输入：s = "a"
输出：0
```
示例 3：
```
输入：s = "ab"
输出：1
```

提示：
```
1 <= s.length <= 2000
s 仅由小写英文字母组成
```

注意：本题与主站 132 题相同： https://leetcode-cn.com/problems/palindrome-partitioning-ii/

# 解题
1. 二维数组g，记录下标i到j是否形成回文，
   1. 将`r >= l` 的部分，即空字符串`r > l`，和长度为1`r == l`，默认是回文
   2. 当`r < l`，仅当 `s[r] == s[l] && g[r+1][l-1]` 是形成回文的
   3. 左边界`r`从`n-2`开始减小直至`0`，右边界`l`从`r+1`开始增加直至`l<n`，判断`g[r][l]`是否为回文
2. `f[r]` 代表将 `[0,r]` 这一段分割成若干回文子串所需要的最小分割次数
   1. `g[0][r]`为true时，不需要分割，最小分割数是0
   2. `l`从1开始遍历直到`l <= r`，范围`0 < l <= r`，
   3. 如果`g[l][r]`为true时，`f[r] = Math.min(f[r], f[l-1] + 1)`
```js
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length, g = new Array(n).fill(0).map(() => new Array(n).fill(true))
    for (let l = n - 2; l >= 0; l--) {
        for (let r = l + 1; r < n; ++r) {
            g[l][r] = s[l] == s[r] && g[l+1][r-1]
        }
    }
    const f = new Array(n).fill(Number.MAX_SAFE_INTEGER)
    for (let r = 0; r < n; r++) {
        if (g[0][r]) {
            f[r] = 0
        } else {
            for(let l = 1; l <= r; l++) {
                if (g[l][r]) {
                    f[r] = Math.min(f[r], f[l-1] + 1)
                }
            }
        }
    }
    return f[n-1]
};
```
- 时间复杂度：O(N^2)
- 空间复杂度：O(N^2)