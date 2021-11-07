# 剑指 Offer II 019. 最多删除一个字符得到回文

给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。

 

示例 1:
```
输入: s = "aba"
输出: true
```
示例 2:
```
输入: s = "abca"
输出: true
解释: 可以删除 "c" 字符 或者 "b" 字符
```
示例 3:
```
输入: s = "abc"
输出: false
```
 

提示:
```
1 <= s.length <= 105
s 由小写英文字母组成
```
 

注意：本题与主站 680 题相同： https://leetcode-cn.com/problems/valid-palindrome-ii/

# 解题
1. 双指针i、j
2. 第一个循环，头尾比较s[i]与s[j]是否相等
   1. 相等的情况，指针向中间移动，执行i++和j-- 
   2. 否则，跳出循环
3. 第二个循环，
   1. 跳过一个数，左边数或者右边数
   2. 比较h(i, j-1)和h(i+1, j)的情况
   3. 只要有一个是回文的情况，就返回true
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0, j = s.length - 1
    while(i <= j) {
        if (s[i] !== s[j])  break
        i++
        j-- 
    }
    return h(i, j-1) || h(i+1, j)

    function h(x, y) {
        while(x <= y) {
            if(s[x++] !== s[y--]) return false
        }
        return true
    }
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)