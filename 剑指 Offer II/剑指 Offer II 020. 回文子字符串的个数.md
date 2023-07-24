# 剑指 Offer II 020. 回文子字符串的个数
给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

 

示例 1：
```
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
```
示例 2：
```
输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

提示：
```
1 <= s.length <= 1000
s 由小写英文字母组成
```

注意：本题与主站 647 题相同：https://leetcode-cn.com/problems/palindromic-substrings/ 

# 解题
1. 枚举每一个可能的回文中心，然后用两个指针分别向左右两边拓展
2. 比如s = 'aaa'，长度n是3，可能的回文中心有5种，也就是 2*n-1
   
左起始位|右起始位|下标
:--:|:--:|:--:
0|0|0
0|1|1
1|1|2
1|2|3
2|2|4
...|...|...
i/2|i/2+i%2|i
```js
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length, res = 0
    for(let i = 0; i < 2 * n - 1; i++) {
        let l = i >> 1, r = l + i % 2
        while(l >= 0 && r < n && s[l--] == s[r++]) {
            res++
        }
    }
    return res
};
```
- 时间复杂度O(N^2)
- 空间复杂度O(1)