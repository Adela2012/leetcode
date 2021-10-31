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
1. 定义数组 dp，其中 dp[i - 1] 表示第 i 个丑数，第 n 个丑数即为 dp[n - 1]
2. 初始值 第 1 个丑数 dp[0] = 1
3. 定义3个指针指向dp下标，p2, p3, p5，表示下一个丑数是当前指针指向的丑数乘以对应的质因数
4. 比较n2,n3,n5，最小值的那个指针+1
5. 最后返回 dp[n - 1]
```js
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = [1]
    let p2 = 0, p3 = 0, p5 = 0
    for (let i = 1; i < n; i++) {
        let n2 = dp[p2] * 2, n3 = dp[p3] * 3, n5 = dp[p5] * 5
        dp[i] = Math.min(n2, n3, n5)
        dp[i] == n2 && ++p2
        dp[i] == n3 && ++p3
        dp[i] == n5 && ++p5
    }
    return dp[n - 1]

};
```
- 时间复杂度O(N)
- 空间复杂度O(N)