# 剑指 Offer II 001. 整数除法
给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。

注意：

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231, 231−1]。本题中，如果除法结果溢出，则返回 231 − 1
 

示例 1：
```
输入：a = 15, b = 2
输出：7
解释：15/2 = truncate(7.5) = 7
```
示例 2：
```
输入：a = 7, b = -3
输出：-2
解释：7/-3 = truncate(-2.33333..) = -2
```
示例 3：
```
输入：a = 0, b = 1
输出：0
```
示例 4：
```
输入：a = 1, b = 1
输出：1
```

提示:
```
-231 <= a, b <= 231 - 1
b != 0 
```

注意：本题与主站 29 题相同：https://leetcode-cn.com/problems/divide-two-integers/

# 解题
## 解题1
**此方法超时。**
依次从a中减去b，n的数量+1。
```javascript []
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
    const MAX = Math.pow(2, 31) - 1, MIN = -Math.pow(2, 31)
    if (a == MIN && b == -1) return MAX
    if (a == MIN && b == 1) return MIN

    const sign = (a > 0) ^ (b > 0)
    a = Math.abs(a), b = Math.abs(b)
    let n = 0
    while(a >= b) {
        a -= b
        n++
    }
    return sign ? -n : n
};
```
- 时间复杂度O(n)
- 空间复杂度O(1)

## 解题2
1. 首先判断a为最小值的特殊边界情况。
   1. 如果b == -1，则返回最大值
   1. 如果b == 1，则返回最小值
2. 定义sign为a/b两者符号相反的情况，用于最后返回时判断是不是负数。
   1. 抑或^，1 ^ 1 = 0，0 ^ 0 = 0，1 ^ 0 = 1
   2. sign = (a > 0) ^ (b > 0)，为 1 时，表明是负数，为 0 时，表明是正数
3. 取a,b的绝对值，赋值给a,b。即a,b现都为正数。
4. 从位数31开始循环，
   1. 比较 a >>> i >= b 是否满足，满足时
   2. a减去b向左位移i位
   3. n加上1向右位移i位
5. 最后根据sign值，返回n

接下来我们举例详细解释一下第4步，例如a = 17, b = 3
1. 使用a >>> i代替a >> i，是为了防止a是最小值的情况，经过取绝对值后，a = 2147483648, 
   1. a >> 1 = -1073741824
   2. a >>> 1 = 1073741824
   3. 显然无符号位移，拿到正数，才是我们需要的
2. a >>> i >= b 由 a >= b << i 转化而来，为了防止 b << i 容易超出范围

a >= b <<< i|是否满足|a -= b << i| n += 1 << i
:--|:--|:--|:--
17 >= 3 << 31 | 不满足 |
...          | 不满足 |
17 >= 3 << 3  | 不满足 |
17 >= 3 << 2  | 满足  | a=17-3<<2=5 | n=0+1<<2=4
5 >= 3 << 1  | 不满足  | 
5 >= 3 << 0  | 满足 | a=5-3<<0=2 | n=4+1<<0=5






```javascript []
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
    const MAX = Math.pow(2, 31) - 1, MIN = -Math.pow(2, 31)
    if (a == MIN && b == -1) return MAX
    if (a == MIN && b == 1) return MIN

    const sign = (a > 0) ^ (b > 0)
    a = Math.abs(a), b = Math.abs(b)
    let n = 0
    for (let i = 31; i >= 0; i--) {
        if(a >>> i >= b) {
            a -= b << i
            n += 1 << i
        }
    }
    return sign ? -n : n
};
```
- 时间复杂度O(1)
- 空间复杂度O(1)