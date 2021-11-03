# 剑指 Offer 43. 1～n 整数中 1 出现的次数

输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

 

示例 1：
```
输入：n = 12
输出：5
```
示例 2：
```
输入：n = 13
输出：6
```

限制：
```
1 <= n < 2^31
```

# 解题
如表格，例如 n = 29
十位|个位
:--:|:--:
2|2-9
2|<font color="blue">1</font>
2|0
<font color="blue">1</font>|2-9
<font color="blue">1</font>|<font color="blue">1</font>
<font color="blue">1</font>|0
0|2-9
0|<font color="blue">1</font>
0|0


在个位数上一共出现了3次，在十位数上一共出现了10次。

1. 我们将`cur`定义为循环至当前位数上的值，`high`为`cur`前的高位值，`low`为`cur`后的低位值，`digit`为当前的位数。
2. 初始设置 `cur = n % 10,  high = Math.floor(n / 10), low = 0,  digit = 1`
3. 判断`cur`的值为哪种情况
   1. `cur` 小于 1，即 `cur == 0`，1的数量只跟高位值`high`有关，`res += high * digit`，例如20，在个位数上（low = 0，cur = 0, high = 2, digit = 1），1出现2次。
   2. `cur` 等于 1，即 `cur == 1`，1的数量跟高位值`high`和低位值`low`都有关，`res += high * digit + low + 1`，例如214，十位数上（low = 4，cur = 1, high = 2，digit = 2），1出现25次
   3. `cur` 大于 1，即 `cur > 1`，1的数量只跟高位值`high`有关，`res += (high + 1) * digit`，例如29，在个位数上（low = 0，cur = 9, high = 2, digit = 1），1出现3次
4. 当 high 或 cur 不为 0 时，一直循环，每次循环更新位数上的值到res，并更新下轮循环的 `low/cur/high/digit` 值
5. 最后返回res

```js
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let high = Math.floor(n / 10), cur = n % 10, low = 0,  digit = 1
    let res = 0
    while(high != 0 || cur != 0) {
        if (cur == 0) res += high * digit
        else if (cur == 1) res += high * digit + low + 1
        else res += (high + 1) * digit
        low += cur * digit
        cur = high % 10
        high = Math.floor(high / 10)
        digit *= 10
    }
    return res
};
```
- 时间复杂度 O(logn)
- 空间复杂度 O(logn)