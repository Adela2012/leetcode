# 剑指 Offer 49. 丑数

我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

 

示例:
```
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
```
说明:  
```
1 是丑数。
n 不超过1690
```
# 解题
```js
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = [0, 1]
    let p2 = 1, p3 = 1, p5 = 1
    for (let i = 2; i <= n; i++) {
        let n2 = dp[p2] * 2, n3 = dp[p3] * 3, n5 = dp[p5] * 5
        dp[i]=Math.min(Math.min(n2, n3), n5)
        if (n2 == dp[i]) {
            p2++
        }
        if (n3 == dp[i]) {
            p3++
        }
        if (n5 == dp[i]) {
            p5++
        }
    }
    return dp[n]
};
```