/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let visited = Array(R).fill('')
  for (let i in visited) visited[i] = Array(C).fill(false)
  let result = Array(R*C).fill('')
  let i = 0
  let queue = [[r0, c0]]
  while (queue.length != 0) {
      let cell = queue.shift()
      let r = cell[0]
      let c = cell[1]
      if (c < 0 || c >= C || r < 0 || r >= R) continue
      if (visited[r][c]) continue
      result[i] = cell
      i++
      visited[r][c] = true
      
      queue.push([r, c-1])
      queue.push([r, c+1])
      queue.push([r-1, c])
      queue.push([r+1, c])
  }
  return result
};