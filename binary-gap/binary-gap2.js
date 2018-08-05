/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  let res = 0
  for (let d = -32; N > 0; N = parseInt(N / 2), d++) {
    if (N % 2 == 1) {
      res = Math.max(res, d)
      d = 0
    }
  }
  return res
};