/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0
    for(let c of S) {
        J.includes(c) && count++
    }
    return count
};