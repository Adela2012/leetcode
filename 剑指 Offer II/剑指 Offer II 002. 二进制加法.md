# 剑指 Offer II 002. 二进制加法
给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:
```
输入: a = "11", b = "10"
输出: "101"
```
示例 2:
```
输入: a = "1010", b = "1011"
输出: "10101"
```

提示：
```
每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。
```

# 解题
末尾对齐，逐位相加，逢二进一
1. na，nb分别为字符串a，b长度，carry为进位值
2. 循环，只要当na，nb，carry 有一个不为0时
3. 每次循环时，计算字符末尾和进位值的和，并赋值给carry
   1. 更新str，加上carry % 2
   2. 更新carry，carry >>= 1，也可写做 carry = Math.floor(carry / 2)
4. 最后，跳出循环，并返回str
```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let str = '', na = a.length, nb = b.length, carry = 0
    while(na || nb || carry ) {
        const ia = na > 0 ? +a[--na] : 0, ib = nb > 0 ? +b[--nb] : 0
        carry += ia + ib
        str = carry % 2 + str
        carry >>= 1
    }
    return str
};
```
- 时间复杂度O(N)
- 空间复杂度O(1)
