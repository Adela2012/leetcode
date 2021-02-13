# 剑指 Offer 15. 二进制中1的个数
请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。

 

示例 1：
```
输入：00000000000000000000000000001011
输出：3
解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
```
示例 2：
```
输入：00000000000000000000000010000000
输出：1
解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
```
示例 3：
```
输入：11111111111111111111111111111101
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
 ```

提示：
```
输入必须是长度为 32 的 二进制串 。
 ```

注意：本题与主站 191 题相同：https://leetcode-cn.com/problems/number-of-1-bits/

# 解题
**方法1**
变成字符串，计数
```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let str = n.toString(2)
    let res = 0
    for (let i of str) {
        i == 1 && res++
    }
    return res
};
```

**方法2**
- & 与运算
  - 若 n & 1 = 0 ，则 n 二进制 最右一位 为 0 
  - 若 n & 1 = 1 ，则 n 二进制 最右一位 为 1 
- n >>> 1 ： 将二进制数字 n 无符号右移一位
```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    while (n != 0) {
        res += n&1
        n = n >>> 1
    }
    return res
};
```

**方法3**
- n &= n - 1 ： 消去数字 n 最右边的 1
```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    while(n != 0){
        res++
        n &= n - 1
    }
    return res
};
```