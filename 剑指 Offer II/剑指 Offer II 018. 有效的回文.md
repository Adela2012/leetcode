# 剑指 Offer II 018. 有效的回文


给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。

本题中，将空字符串定义为有效的 回文串 。

 

示例 1:

输入: s = "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: s = "race a car"
输出: false
解释："raceacar" 不是回文串
 

提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成
 

注意：本题与主站 125 题相同： https://leetcode-cn.com/problems/valid-palindrome/

# 解题
## 解题1
使用JS的API
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
    return a == a.split('').reverse().join('')
};
```

## 解题2
头尾双指针
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0, j = s.length - 1;
    while(i <= j) {
        const reg = /[^0-9a-zA-Z]/
        if(reg.test(s[i])) i++
        else if(reg.test(s[j])) j--
        else if(s[i++].toLowerCase() != s[j--].toLowerCase()) return false
    }
    return true
};
```
- 时间复杂度O(N)
- 空间繁杂度O(1)