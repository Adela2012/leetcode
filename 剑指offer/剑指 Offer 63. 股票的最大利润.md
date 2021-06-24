# 剑指 Offer 63. 股票的最大利润
假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

 

示例 1:

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

示例 2:

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

限制：
```
0 <= 数组长度 <= 10^5
```
# 解题
用类似动态规划的思想，到第i天买入，那么我能赚到的最大利润是多少呢？就是i + 1 ~ n天中最大的股价减去第i天的。找最大股价的问题可以在找第i+1~n天的最大利润时顺便记录，

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0, minPrice = Number.MAX_VALUE
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else if (maxProfit < price - minPrice){
            maxProfit = price - minPrice
        }
    }
    return maxProfit
};
```