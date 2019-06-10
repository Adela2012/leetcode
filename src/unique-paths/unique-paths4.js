/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let num = 1
  let denom = 1
  let small = m > n ? n:m
  for (let i = 1; i <= small - 1; i++) {
      num *= m + n - 1 - i
      denom *= i
  }
   return parseInt(num/denom)
};