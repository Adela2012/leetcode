# 剑指 Offer II 016. 不含重复字符的最长子字符串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

 

示例 1:
```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
```
示例 2:
```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
```
示例 3:
```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
示例 4:
```
输入: s = ""
输出: 0
```

提示：
```
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
```

注意：本题与主站 3 题相同： https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

# 解题
1. 滑动窗口，i代表起始下标，j代表结束下标。map记录上次s[j]出现的下标值。
2. 每次循环，
   1. 判断map中有没有记录过s[j]的值，如果有，判断上次的i下标值和s[j]上次出现的下标值，使用最大的那个
   2. 更新长度maxLen为 Math.max(maxLen, j - i + 1)
   3. 每次更新map
3. 最后返回maxLen
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let maxLen = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]) + 1)   
        }
        maxLen = Math.max(maxLen, j - i + 1)
        map.set(s[j], j)
    }
    return maxLen
};
```
- 时间复杂度O(N)
- 空间复杂度O(N)