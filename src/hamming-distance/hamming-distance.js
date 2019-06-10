/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  x = x.toString(2).split('').reverse()
  y = y.toString(2).split('').reverse()
  let i = 0, res = 0
  while(i<x.length || i < y.length) {
      res += x[i]^y[i]
      i++
  }
  return res
};