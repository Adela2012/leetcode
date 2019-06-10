/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(num.toString(2).split('').map(i => i == 1 ? 0 : 1).join(''), 2)
};