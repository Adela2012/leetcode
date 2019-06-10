/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let q = []
  let times = 0
  let freshNum = 0
  //     不新鲜的坐标和不新鲜的数量
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) {
        q.push([i, j])
      } else if (grid[i][j] == 1) {
        freshNum++
      }
    }
  }

  while (q.length && freshNum) {
    let newQ = []
    while (q.length) {
      let bad = q.shift()
      let infected = helper(grid, bad[0], bad[1], newQ)
      freshNum -= infected
    }
    times++
    q = newQ
  }

  if (freshNum > 0) return -1
  return times
};

var helper = function (grid, i, j, q) {
  let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let infected = 0
  for (let d of dir) {
    let x = d[0] + i
    let y = d[1] + j
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] == 1) {
      q.push([x, y])
      infected++
      grid[x][y]++
    }
  }
  return infected
}