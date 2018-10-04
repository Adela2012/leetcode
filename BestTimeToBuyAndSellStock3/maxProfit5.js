/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy1 = prices[0]
    let buy2 = prices[0]
    let sell1 = 0
    let sell2 = 0
    
    for (let i = 1; i < prices.length; i++) {
        buy1 = Math.min(buy1, prices[i])
        sell1 = Math.max(sell1, prices[i] - buy1)
        
        buy2 = Math.min(buy2, prices[i] - sell1)
        sell2 = Math.max(sell2, prices[i] - buy2)
    }
    return sell2
};