/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let res = 0
    let prevBuy
    let prevRes = 0
    
    for (let i = 1; i < prices.length; i++) {
        prevBuy = buy
        buy = Math.min(buy, prices[i] - prevRes)
        prevRes = res
        res = Math.max(res, prices[i] - prevBuy)
    }
    
    return res
};