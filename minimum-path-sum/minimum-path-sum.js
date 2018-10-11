/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length
  let n = grid[0].length
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i > 0 && j > 0) {
              grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
          }
          if (i == 0 && j > 0) {
              grid[i][j] += grid[i][j - 1]
          }
          if (j == 0 && i > 0) {
              grid[i][j] += grid[i - 1][j]
          }
      }
  }
  return grid[m - 1][n - 1]
};