# 剑指 Offer 48. 最长不含重复字符的子字符串
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
示例 3:
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

提示：
```
s.length <= 40000
```

注意：本题与主站 3 题相同：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

# 解题
- 维护一个开始i，结束j的下标，每次移动j的时候，记录下标j的字符，下次开始出现的起始位置在map中。
- 这样在下次移动时，就能比较，当前下标上的字符，有没有重复出现，上次出现的下标是什么。
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), ans = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(i, map.get(s[j]))
        }
        ans = Math.max(ans, j - i + 1)
        map.set(s[j], j+1)
    }
    return ans
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)
