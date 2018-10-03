/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  let res = []
  for (let i = 0, l = 1, r = n; l <= r; i++) {
      res[i] = k > 1 ? (k-- % 2 == 0 ? r-- : l++) : l++
  }
  return res
};