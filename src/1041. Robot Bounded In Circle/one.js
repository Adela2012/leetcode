/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (ins) {
  let d = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let x = 0
  let y = 0
  let i = 0

  for (let j = 0; j < ins.length; j++) {
    if (ins.charAt(j) == 'R') {
      i = (i + 1) % 4
    } else if (ins.charAt(j) == 'L') {
      i = (i + 3) % 4
    } else {
      x += d[i][0]
      y += d[i][1]
    }
  }
  return x == 0 && y == 0 || i > 0


};