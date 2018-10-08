/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length
  for (let i = 0; i < n / 2; i++) {
      for (let j = i; j < n - i - 1; j++) {
          let tmp = matrix[i][j]
          matrix[i][j] = matrix[n-j-1][i]
          matrix[n-j-1][i] = matrix[n-i-1][n-j-1]
          matrix[n-i-1][n-j-1] = matrix[j][n-i-1]
          matrix[j][n-i-1] = tmp
      }
  }
};