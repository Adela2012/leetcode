/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let dr = [0, 1, 0, -1]
  let dc= [1, 0, -1, 0]
  
  let l = grid.length
  let res = 0
  
  for (let r = 0; r < l; r++) {
      for (let c = 0; c < l; c++) {
          if(grid[r][c] > 0) {    
              res += 2
              for (let k = 0; k < 4; k++) {
                  let nr = r + dr[k]
                  let nc = c + dc[k]
                  let nv = 0
                  if (nr >= 0 && nr < l && nc >= 0 && nc < l) {
                      nv = grid[nr][nc]
                  }
                  res += Math.max(grid[r][c] - nv, 0)
              }
          }
      }
  }
  return res
};