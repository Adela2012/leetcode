/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return parseInt(n/5) == 0 ? 0 : trailingZeroes(parseInt(n/5)) + parseInt(n/5);
};