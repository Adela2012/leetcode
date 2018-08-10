/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    let ri = 0
    let rj = 0
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 0) res++
      ri = Math.max(ri, grid[i][j])
      rj = Math.max(rj, grid[j][i])
    }
    res = res + ri + rj
  }
  return res
};