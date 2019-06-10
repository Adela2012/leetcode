/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  var isMagic = function (x, y) {
    let set = new Set()
    for (let i = 0; i < 3; i++) {
      let csum = 0, rsum = 0
      for (let j = 0; j < 3; j++) {
        csum += grid[x + i][y + j]
        rsum += grid[x + j][y + i]
        if (grid[x + i][y + j] < 10) set.add(grid[x + i][y + j])
        else return 0
      }
      if (csum != 15 || rsum != 15) return 0
    }
    if (set.size == 9 && grid[x][y] + grid[x + 1][y + 1] + grid[x + 2][y + 2] == 15 && grid[x + 2][y] + grid[x + 1][y + 1] + grid[x][y + 2] == 15)
      return 1
    else return 0
  }
  let res = 0
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      res += isMagic(i, j)
    }
  }
  return res
};