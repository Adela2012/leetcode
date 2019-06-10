/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0) return 0
    let res = 0
    let cur = timeSeries[0]
    for (let i of timeSeries) {
        res += i - cur >= duration ? duration : i - cur
        cur = i
    }
    return res + duration
};