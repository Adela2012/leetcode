/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function (A) {
  let N = A.length
  let min = N
  for (let i = N - 1; i >= 2; i--) {
    min = Math.min(min, A[i])
    if (A[i - 2] > min) return false
  }
  return true
};