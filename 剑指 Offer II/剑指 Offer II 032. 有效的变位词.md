# 剑指 Offer II 032. 有效的变位词

给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。

注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。

 

示例 1:
```
输入: s = "anagram", t = "nagaram"
输出: true
```
示例 2:
```
输入: s = "rat", t = "car"
输出: false
```
示例 3:
```
输入: s = "a", t = "a"
输出: false
```
 

提示:
```
1 <= s.length, t.length <= 5 * 104
s and t 仅包含小写字母
```
 

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 

注意：本题与主站 242 题相似（字母异位词定义不同）：https://leetcode-cn.com/problems/valid-anagram/

# 解题
1. 当s和t完全相等，或者长度不同时，返回false
2. 设置变量map用于存储s字符串的字母数量
3. 遍历t时，将数量减去
4. 最后map为空时，说明是字母异位词
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s == t || s.length != t.length) return false
    let map = new Map()
    for (let i of s) {
        map.set(i, (map.get(i) || 0) + 1)
    }
    for (let i of t) {
        if (!map.has(i)) return false
        if (map.get(i) == 1) map.delete(i)
        else map.set(i, map.get(i) - 1)
    }
    return map.size == 0
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)