/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return matrix
  
  let m = matrix.length
  let n = matrix[0].length
  
  let dr = [0, 1, 0, -1]
  let dc = [1, 0 ,-1, 0]
  
  let res = []
  
  let x = 0
  let y = 0
  let di = 0
  for (let i = 0; i < m * n; i++) {
      res.push(matrix[x][y])
      matrix[x][y] = false
      let dx = x + dr[di]
      let dy = y + dc[di]
      if (dx >= 0 && dx < m && dy >= 0 && dy < n && matrix[dx][dy] != false) {
          x = dx
          y = dy
      } else {
          di = (di + 1) % 4
          x = x + dr[di]
          y = y + dc[di]
      }
  }
  return res
};