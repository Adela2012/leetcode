/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let m = A.length
  let n = B.length
  if (m == 0 || n == 0) return 0
  let res = []
  for (let i = 0; i <= m; i++) {
      let arr = []
      for (let j = 0; j <= n; j++) {
          arr.push(0)
      }
      res.push(arr)
  }
  let max = 0
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (A[i - 1] == B[j - 1]) {
              res[i][j] = res[i - 1][j - 1] + 1
              max = Math.max(max, res[i][j])
          }
      }
  }
  return max
};