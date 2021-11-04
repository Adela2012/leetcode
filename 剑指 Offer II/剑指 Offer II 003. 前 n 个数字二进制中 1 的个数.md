# 剑指 Offer II 003. 前 n 个数字二进制中 1 的个数
给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。

 

示例 1:
```
输入: n = 2
输出: [0,1,1]
解释: 
0 --> 0
1 --> 1
2 --> 10
```
示例 2:
```
输入: n = 5
输出: [0,1,1,2,1,2]
解释:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
``` 

说明 :
```
0 <= n <= 105
``` 

进阶:
```
给出时间复杂度为 O(n*sizeof(integer)) 的解答非常容易。但你可以在线性时间 O(n) 内用一趟扫描做到吗？
要求算法的空间复杂度为 O(n) 。
你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount ）来执行此操作。
``` 

注意：本题与主站 338 题相同：https://leetcode-cn.com/problems/counting-bits/


# 解题
## 解题1
暴力法
1. 从0到n循环，将转化成二进制字符串，
2. 计算它有1的长度，并推入结果数组，即为所求值。
```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = []
    for (let i = 0; i <= n; i++) {
        let si = i.toString(2).split('')
        res.push(si.filter(j => j == 1).length)
    }
    return res
};
```

1. 使用 `x &= (x−1)`，代替 `Array.filter` 方法
2. 对于任意整数 x，令 `x &= (x−1)`，将 x 的二进制表示的最后一个 1 变成 0
```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = []
    for (let i = 0; i <= n; i++) {
        res.push(countOnes(i))
    }
    return res

    function countOnes(x) {
        let ones = 0
        while(x) {
            x &= (x-1)
            ones++
        }
        return ones
    }
};
```
- 时间复杂度O(nlogn)
- 空间复杂度O(1)

## 解题2(最高有效位)

i|res[i]|highBit|i - highBit| res[i - highBit]|(i & (i - 1)) == 0
:--:|:--:|:--:|:--|:--|:--
0 | 0 | 0 | 0 | - | -
1 | 1 | 1 | 0 | 0 | true
2 | 1 | 2 | 0 | 0 | true
3 | 2 | 2 | 1 | 1 | false
4 | 1 | 4 | 0 | 0 | true
5 | 2 | 4 | 1 | 1 | false
6 | 2 | 4 | 2 | 1 | false
7 | 3 | 4 | 3 | 2 | false

1. 从上表中，其实我们只是要找到n = 2^k次开头的数，再规律变化就可，
2. 可以通过最高有效位的方式， 即 `x & (x - 1) == 0` 时找到该数

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [0]
    let highBit = 0
    for (let i = 1; i <= n; i++) {
        if ((i & (i - 1)) == 0) {
            highBit = i
        }
        res[i] = res[i - highBit] + 1
    }
    return res
};
```
- 时间复杂度O(n)
- 空间复杂度O(1)

## 解题3(最低有效位)

start|end|res区间[start-end)
:--:|:--:|:--:
0|1|0,
1|2|1,
2|4|1,2,
4|8|1,2,2,3,
8|16|1,2,2,3,2,3,3,4,

1. 从上表中，我们可以看到，`res[i] = res[i/2] + i % 2`
2. 对于正整数 i，将其二进制表示右移一位，等价于将最低位去掉，得到的数是 i/2
   1. i是偶数，最低位是0，因此 `res[i] = res[i/2]`
   2. i是奇数，最低位是1，因此 `res[i] = res[i/2] + 1`
```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [0]
    for (let i = 1; i <= n; i++) {
        res[i] = res[i >> 1] + i % 2
    }
    return res
};
```
- 时间复杂度O(n)
- 空间间复杂度O(1)

## 解题4(最低设置位)

i|res[i]|i & (i-1)|res[i & (i-1)]
:--:|:--:|:--:|:--:
0 | 0 | - | -
1 | 1 | 0 | 0
2 | 1 | 0 | 0
3 | 2 | 2 | 1
4 | 1 | 0 | 0
5 | 2 | 4 | 1
6 | 2 | 4 | 1
7 | 3 | 6 | 2

1. 例如 i = 7，其二进制表示为111，去掉最低位以后为110，也就是res[7] = res[6] + 1
   
```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [0]
    for (let i = 1; i <= n; i++) {
        res[i] = res[i & (i-1)] + 1
    }
    return res
};
```
- 时间复杂度O(n)
- 空间间复杂度O(1)