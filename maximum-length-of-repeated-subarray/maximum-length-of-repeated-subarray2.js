/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let m = A.length
  let n = B.length
  if (m == 0 || n == 0) return 0
  let res = Array(n+1).fill(0)
  let max = 0
  for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
          if (A[i] == B[j]) {
              res[j] = res[j+1] + 1
              max = Math.max(max, res[j])
          } else {
              res[j] = 0
          }
      }
  }
  return max
};