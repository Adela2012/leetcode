# 剑指 Offer II 017. 含有所有字符的最短字符串

给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。

如果 s 中存在多个符合条件的子字符串，返回任意一个。

 

注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

 

示例 1：
```
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC" 
解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
```
示例 2：
```
输入：s = "a", t = "a"
输出："a"
```
示例 3：
```
输入：s = "a", t = "aa"
输出：""
解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
```

提示：
```
1 <= s.length, t.length <= 105
s 和 t 由英文字母组成
```

进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？

 

注意：本题与主站 76 题相似（本题答案不唯一）：https://leetcode-cn.com/problems/minimum-window-substring/

# 解题
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let n = s.length, m = t.length
    if (n < m) return ''
    let map = new Map()
    for (let i of t) {
        map.set(i, (map.get(i)||0) + 1)
    }
    let left = 0, right = 0, minLen = Number.MAX_VALUE, minLeft = 0, count = map.size
    while(right < n || (right == n && count == 0)) {
        if(count > 0) {
            const i = s[right++]
            if(map.has(i)) {
                map.set(i, map.get(i) - 1)
                if (map.get(i) == 0) count--
            }
            continue
        }
        if(right - left < minLen) {
            minLeft = left
            minLen = right - left
        }
        const j = s[left++]
        if(map.has(j)) {
            map.set(j, map.get(j) + 1)
            if (map.get(j) == 1) count++
        }
    }
    return minLen == Number.MAX_VALUE ? '' : s.substr(minLeft, minLen)
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)