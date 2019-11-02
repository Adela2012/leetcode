/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let isCol = false
  let R = matrix.length, C = matrix[0].length

  for (let r = 0; r < R; r++) {
    if (matrix[r][0] == 0) isCol = true

    for (let c = 1; c < C; c++) {
      if (matrix[r][c] == 0) {
        matrix[0][c] = 0
        matrix[r][0] = 0
      }
    }
  }

  for (let r = 1; r < R; r++) {
    for (let c = 1; c < C; c++) {
      if (matrix[r][0] == 0 || matrix[0][c] == 0) {
        matrix[r][c] = 0
      }
    }
  }

};