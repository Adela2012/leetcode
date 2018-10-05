/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let buy = prices[0]
  let res = 0
  
  for (let i = 0; i < prices.length; i++) {
      buy = Math.min(buy, prices[i] - res)
      res = Math.max(res, prices[i] - buy - fee)
  }
  
  return res
};