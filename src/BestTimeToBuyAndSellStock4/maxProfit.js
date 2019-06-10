/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (k >= prices.length / 2) return quick(prices)
  let min = Array(k + 1).fill(prices[0])
  let dp = Array(k + 1).fill(0)
  
  for (let i = 1; i < prices.length; i++) {
      for (let j = 1; j <= k; j++) {
          min[j] = Math.min(min[j], prices[i] - dp[j - 1])
          dp[j] = Math.max(dp[j], prices[i] - min[j])
      }     
  }
  return dp[k]
};

var quick = (prices) => {
  let res = 0
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] - prices[i - 1] > 0) res += prices[i] - prices[i - 1]
  }
  return res
}