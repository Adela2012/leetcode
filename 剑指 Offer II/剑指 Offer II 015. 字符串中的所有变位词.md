# 剑指 Offer II 015. 字符串中的所有变位词

给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

变位词 指字母相同，但排列不同的字符串。

 

示例 1:
```
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
```
示例 2:
```
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。
```

提示:
```
1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母
```

注意：本题与主站 438 题相同： https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

# 解题
1. 采用arr数组来记录字母中对应的数量值，例如p = 'aabc'，arr = [-2,-1,-1,0,...]
2. 滑动窗口[i,j]遍历s，s[j]对应arr中的数量+1，
   1. 如果大于0，就不断减小窗口，目的是减少arr[x]值，直至为0
   2. 计算窗口的大小，如何符合p的长度，则把下标推入res数组中
3. 最后返回res
```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const arr = new Array(26).fill(0), res = [], n = s.length,  m = p.length
    for (let i of p) {
        --arr[i.charCodeAt()-'a'.charCodeAt()]
    }

    for (let i = 0, j = 0; j < n; j++) {
        const x = s[j].charCodeAt()-'a'.charCodeAt()
        arr[x]++
        while(arr[x] > 0) {
            --arr[s[i++].charCodeAt()-'a'.charCodeAt()]
        }
        if (j - i + 1 == m) res.push(i)
    }
    return res
};
```