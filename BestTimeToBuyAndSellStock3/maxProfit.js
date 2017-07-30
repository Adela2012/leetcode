/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var leftcur = prices[0]; 
    var leftres = new Array(prices.length);leftres[0] = 0;
    for(var i = 1; i < prices.length; i++) {
        leftcur = Math.min(leftcur, prices[i]);
        leftres[i] = Math.max(prices[i] - leftcur, leftres[i - 1]);
    }
    console.log(leftcur,leftres);
    var rightcur = prices[prices.length - 1]; 
    var rightres = new Array(prices.length);rightres[prices.length - 1] = 0;
    for(var j = prices.length - 2; j >= 0; j--) {
        rightcur = Math.max(rightcur, prices[j]);
        rightres[j] =Math.max(rightcur - prices[j], rightres[j + 1]);
    }
    console.log(rightcur,rightres);    
    var res = 0;
    for(var k = 0; k < prices.length; k++) {
        if(leftres[k] + rightres[k] > res) res = leftres[k] + rightres[k];
    }
    return res;
};