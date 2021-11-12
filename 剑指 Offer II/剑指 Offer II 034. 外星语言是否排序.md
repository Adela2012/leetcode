# 剑指 Offer II 034. 外星语言是否排序
某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。

 

示例 1：
```
输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
输出：true
解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
```
示例 2：
```
输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
输出：false
解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
```
示例 3：
```
输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
输出：false
解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小（更多信息）。
```
 

提示
```
1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
在 words[i] 和 order 中的所有字符都是英文小写字母。
```
 

注意：本题与主站 953 题相同： https://leetcode-cn.com/problems/verifying-an-alien-dictionary/

# 解题
1. 首先要理解这题的意思：比较words[i]是不是升序排列的。也就是words[i] < words[i+1]。
3. 通过map来拿到字母的排序，
   1. 默认从1开始，`map.set(order[i], i+1)`
   2. 如果没有字母，则为0，`map.get(s1) || 0`
4. 需要从words[i]的字母逐个进行比较，
   1. 如果首字母words[i]的排序比words[i+1]小（示例1中），那么就是排序的，
      1. 直接进行下一组word的比较，通过break跳出循环j。`if(i1 < i2) break`
   2. 如果首字母words[i]与words[i+1]相同，逐个比较下个字母，如果字母排序大，那么就不是排序的。
      1. 判断结束，返回false。`if(i1 > i2) return false`
```js
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = new Map()
    for(let i = 0; i < order.length; i++) {
        map.set(order[i], i+1)
    }

    for (let i = 0; i < words.length -1; i++) {
        let w1 = words[i], w2 = words[i+1]
        let l1 = w1.length, l2 = w2.length
        for(let j = 0; j < l1 || j < l2; j++) {
            let s1 = w1[j], s2 = w2[j]
            let i1 = map.get(s1) || 0, i2 = map.get(s2) || 0
            if(i1 > i2) return false
            if(i1 < i2) break
        }
    }
    return true
};
```
- 时间复杂度O(NM)
- 空间复杂度O(1)