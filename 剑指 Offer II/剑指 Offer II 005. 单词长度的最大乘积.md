# 剑指 Offer II 005. 单词长度的最大乘积
给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。

 

示例 1:
```
输入: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
输出: 16 
解释: 这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。
```
示例 2:
```
输入: words = ["a","ab","abc","d","cd","bcd","abcd"]
输出: 4 
解释: 这两个单词为 "ab", "cd"。
```
示例 3:
```
输入: words = ["a","aa","aaa","aaaa"]
输出: 0 
解释: 不存在这样的两个单词。
```
 

提示：
```
2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] 仅包含小写字母
```

注意：本题与主站 318 题相同：https://leetcode-cn.com/problems/maximum-product-of-word-lengths/

# 解题
1. 我们将words数组中的每个字符串w，转化成bit类型用于存储，
   1. 遍历w，拿到每个字符s，计算s.charCodeAt() - 'a'.charCodeAt()。例如'a'，计算后值为0，'b'，计算后值为1
   2. 通过二进制位数来存储该s是否有某个字母。 bit |= 1 << (s.charCodeAt() - 'a'.charCodeAt())
2. 将转化后的bit存储在map中，并将字符串w的长度当做值。
   1. 这儿map的key存储的值，为拥有相同字母的最大长度，
   2. 例如'ab'的bit值为11，'abbaabbb'的bit值也为11，因此map[11] = 8（'abbaabbb'的长度）
3. 两个循环比较map的key值i和j，当 (i&j) == 0 时，说明没有重复字母，即可拿到他们长度的最大乘积

```js
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let map = new Map()
    for(let w of words) {
        let bit = 0
        for (let s of w) {
            bit |= 1 << (s.charCodeAt() - 'a'.charCodeAt())
        }
        const wordMaxLen = map.has(bit) ? Math.max(map.get(bit), w.length) : w.length
        map.set(bit, wordMaxLen)
    }
    let max = 0
    for (let [i, vi] of map) {
        for (let [j, vj] of map) {
            if ((i & j) == 0) max = Math.max(max, vi * vj)
        }
    }
  
    return max
};
```

- 时间复杂度O(max(M,N)*N)
- 空间复杂度O(N)
其中N为words数组长度，M为words[i]字符串长度
