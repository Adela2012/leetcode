# 剑指 Offer II 014. 字符串中的变位词

给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。

换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

 

示例 1：
```
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
```
示例 2：
```
输入: s1= "ab" s2 = "eidboaoo"
输出: False
```

提示：
```
1 <= s1.length, s2.length <= 104
s1 和 s2 仅包含小写字母
```

注意：本题与主站 567 题相同： https://leetcode-cn.com/problems/permutation-in-string/


# 解题
1. 采用arr数组来记录字母中对应的数量值，例如s1 = 'aabc'，arr = [-2,-1,-1,0,...]
2. 滑动窗口[i,j]遍历s2，s2[j]对应arr中的数量+1，
   1. 如果大于0，就不断减小窗口，目的是减少arr[x]值，直至为0
   2. 计算窗口的大小，如何符合s1的长度，则为true
3. 最后返回false
```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let n = s1.length, m = s2.length
    if (n > m) return false
    const arr = new Array(26).fill(0)
    for (let s of s1) {
        --arr[s.charCodeAt() - 'a'.charCodeAt()]
    }
    for (let i = 0, j = 0; j < m; j++) {
        const x = s2[j].charCodeAt() - 'a'.charCodeAt()
        ++arr[x]
        while(arr[x] > 0) {
            --arr[s2[i++].charCodeAt() - 'a'.charCodeAt()]
        }
        if(j-i+1 == n) return true
    }
    return false
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)