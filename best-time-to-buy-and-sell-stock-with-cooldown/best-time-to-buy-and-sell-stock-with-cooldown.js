/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sell = 0
  let prevSell = 0
  let buy = 0 - prices[0]
  let prevBuy
  
  for (let price of prices) {
      prevBuy = buy
      buy = Math.max(prevSell - price, buy)
      prevSell = sell
      sell = Math.max(prevBuy + price, sell)
  }
  
  return sell
};