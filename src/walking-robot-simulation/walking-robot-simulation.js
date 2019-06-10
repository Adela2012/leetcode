/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let dx = [0, 1, 0, -1]
  let dy = [1, 0, -1, 0]
  let x = 0, y = 0, di = 0, res = 0
  
  let set = new Set()
  for (let obstacle of obstacles) {
      set.add(obstacle[0] + ' ' + obstacle[1])
  }
  
  for (let cmd of commands) {
      if (cmd == -1) {
          di = (di + 1) % 4
      } else if (cmd == -2) {
          di = (di + 3) % 4
      } else {
          for (let k = 1; k <= cmd; k++) {
              let tx = x + dx[di]
              let ty = y + dy[di]
              if (!set.has(tx + ' ' + ty)) {
                  x += dx[di]
                  y += dy[di]
                  res = Math.max(res, x*x + y*y)
              }
          }
      }
  }
  return res
};