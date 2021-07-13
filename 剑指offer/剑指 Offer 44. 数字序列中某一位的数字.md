# 剑指 Offer 44. 数字序列中某一位的数字
数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

 

示例 1：
```
输入：n = 3
输出：3
```
示例 2：
```
输入：n = 11
输出：0
```

限制：
```
0 <= n < 2^31
```

# 解题
```js
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n == 0) return n
    let digit = 1, count = 9,start = 1
    while(n > count) {
        n -= count
        digit++
        start *= 10
        count = start * digit * 9
    }
    let num = start + Math.ceil(n / digit) - 1
    return num.toString()[(n - 1) % digit]

};
```