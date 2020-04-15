# 1408. String Matching in an Array
Easy

Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].


Example 1:
```
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
```
Example 2:
```
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".
```
Example 3:
```
Input: words = ["blue","green","bu"]
Output: []
```

Constraints:

- 1 <= words.length <= 100
- 1 <= words[i].length <= 30
- words[i] contains only lowercase English letters.
- It's guaranteed that words[i] will be unique.

--------------

## 解题

给出一个字符串数组。返回所有是另一个字符串的任意顺序的子字符串的字符串。

- 暴力拆解法，双次循环
- filter过滤，双次循环
- 使用set, 双次循环

### 暴力拆解法，双次循环
首先想到的方法，就是暴力拆解法，嵌套循环两次。第一次循环遍历数组，第二次循环查找是否满足条件。
其中要注意的一点是，当满足条件（第一次循环的字符串str是第二次循环的字符串的子字符串），就要跳出第二次循环，否则该字符串str可能会被推入多次。

- 复杂度分析
    - 时间复杂度：O(N^2)， N是数组长度
    - 空间复杂度：O(N)

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let arr = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0;  j < words.length; j++) {
            if (i != j && words[j].indexOf(words[i]) != -1) {
                arr.push(words[i])
                break
            } 
        }
    }
    return arr
};
```
- Runtime: 60 ms
- Memory: 34.8 MB

### filter过滤，双次循环
此方法跟上述思路一致，不过使用了filter方法进行过滤。

- 复杂度分析
    - 时间复杂度：O(N^2)， N是数组长度
    - 空间复杂度：O(1)

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((x, i) => {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(x)) {
                return true
            }
        }
        return false
    })
};
```
- Runtime: 60 ms
- Memory: 34.6 MB

### 使用set, 双次循环
此方法，在循环的次数上做了减法，只判断比第一次循环，下标大的字符串。
- 复杂度分析
    - 时间复杂度：O(N^2)， N是数组长度
    - 空间复杂度：O(N)
```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let set = new Set()
    for (let i = 0; i < words.length - 1; i++) {
        let cur = words[i]
        for (let j = i + 1; j < words.length; j++) {
            let nex = words[j]
            if (cur.includes(nex)) set.add(nex)
            if (nex.includes(cur)) set.add(cur)
        }
    }
    return [...set]
};
```
- Runtime: 56 ms
- Memory: 34.8 MB

### 来源
- [leetcode](https://leetcode.com/problems/string-matching-in-an-array/)