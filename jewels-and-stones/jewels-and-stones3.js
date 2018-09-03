/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    return S.split('').reduce((count, i) => J.includes(i) ? ++count : count, 0)
};