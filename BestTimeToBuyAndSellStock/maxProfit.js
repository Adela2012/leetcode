/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    for(var i = 0; i < prices.length; i++) {
        var cur = 0;
        for(var j = i; j < prices.length; j++) {
            cur = Math.max(cur, prices[j] - prices[i]);
        }
        profit = Math.max(profit, cur);
    }
    return profit;
};