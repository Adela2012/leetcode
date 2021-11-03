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

数字范围|开始数字start|位数digit|范围数字数量count|n -= count
---|:---:|:---:|:---:|:---:
1-9|1|1|9|n=n-9
10-99|10|2|180|n=n-9-180
100-999|100|3|2700|n=n-9-180-2700

1. 初始设置，start = 1，digit = 1， count = 9
2. 不断循环n与count值的比较，判断 n-= count 后，处在哪个digit位数区间
3. 判断在哪个num上，
   1. 例如 n = 17，n = n - 9 = 8, 
   2. 在 digit = 2 区间，此时 start = 10，
   3. num = 10 + 8 / 2 - 1 = 13 
4. 判断在num哪个数位上，(n - 1) % digit = (8 - 1) % 2 = 1

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
- 时间复杂度 O(logn)
- 空间复杂度 O(logn)