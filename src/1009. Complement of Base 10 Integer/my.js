/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let n = N.toString(2)
  let l = ''
  
  for (let i of n) {
      l += i == '1' ? '0' : '1'
  }
  
  return Number.parseInt(l, 2)
};