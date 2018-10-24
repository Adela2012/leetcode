/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
  let res = 0
  let count = 0
  let p = 0
  for (let i = 0; i < A.length; i++) {
      if (A[i] >= L && A[i] <= R) {
          count = i - p + 1
          res += count
      } else if (A[i] < L) {
          res += count
      } else {
          p = i + 1
          count = 0
      }
  }
  return res
};