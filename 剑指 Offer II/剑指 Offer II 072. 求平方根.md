# 剑指 Offer II 072. 求平方根

给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。

正数的平方根有两个，只输出其中的正数平方根。

如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。

 

示例 1:
```
输入: x = 4
输出: 2
示例 2:

输入: x = 8
输出: 2
解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2
```

提示:

0 <= x <= 231 - 1

# 解题
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x
    while(left <= right) {
        let mid = left + ((right - left) >> 1)
        let midSqrt = mid * mid
        let midBigSqrt = (mid + 1)  * (mid + 1)
        if (midSqrt <= x && midBigSqrt > x) {
            return mid
        } else if (midSqrt < x) {
            left = mid + 1
        } else if (midSqrt > x) {
            right = mid - 1
        }
    }
    return left
};
```