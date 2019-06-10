/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let one = 0, two = 0, all = 0;
    for (let i in cost) {
        all = Math.min(one, two) + cost[i]
        two = one
        one = all
    }
    return Math.min(one, two)
};