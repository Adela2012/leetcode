/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let MODIFIED = -100000
  let R = matrix.length
  let C = matrix[0].length

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (matrix[r][c] == 0) {
        for (let k = 0; k < C; k++) {
          if (matrix[r][k] != 0)
            matrix[r][k] = MODIFIED
        }
        for (let k = 0; k < R; k++) {
          if (matrix[k][c] != 0)
            matrix[k][c] = MODIFIED
        }
      }
    }
  }

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (matrix[r][c] == MODIFIED) {
        matrix[r][c] = 0
      }
    }
  }

};