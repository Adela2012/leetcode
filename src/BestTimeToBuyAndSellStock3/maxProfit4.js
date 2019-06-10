/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Array(3).fill(prices[0])
    let dp = Array(3).fill(0)
    
    for (let i = 1; i < prices.length; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1])
            dp[k] = Math.max(dp[k], prices[i] - min[k])
        }
    }
    return dp[2]
};