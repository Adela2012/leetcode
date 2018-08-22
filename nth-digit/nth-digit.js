/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let base = 9, ith = 1, ix = 1
  while(n > base * ix) {
      n -= base*(ix++) 
      ith += base
      base = base * 10
  }
  
  return parseInt((ith + (n - 1) / ix).toString().charAt((n - 1) % ix))
};