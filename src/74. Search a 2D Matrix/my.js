/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let R = matrix.length
  if (R == 0) return false
  let C = matrix[0].length
  let l = 0, r = R * C - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    let x = Math.floor(m / C), y = Math.floor(m % C)

    let mval = matrix[x][y]
    if (mval == target) return true
    if (mval < target) l = m + 1
    if (mval > target) r = m - 1
  }

  return false
};