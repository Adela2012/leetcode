/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let count = 0
  for (let i = L; i <= R; i++) {
      if(helper(i)) count++
  }
  return count
};

var helper = (num) => {
  let l = num.toString(2).split('0').join('').length
  return l == 2 || l == 3 || l == 5 || l == 7 || l == 11 || l == 17 || l == 13 || l == 19
}