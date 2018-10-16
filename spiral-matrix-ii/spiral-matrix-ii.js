/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = []
  for (let i = 0; i < n; i++) {
      let arr = []
      for (let j = 0; j < n; j++) {
          arr.push(-1)
      }
      res.push(arr)
  }
  let left = 0, right = n - 1, top = 0, bottom = n - 1, i = 1
  while (left <= right && top <= bottom) {
      for (let x = left; x <= right; x++) {
          res[top][x] = i++
      }
      top++
      for (let y = top; y <= bottom; y++) {
          res[y][right] = i++
      }
      right--
      for (let x = right; x >= left; x--) {
          res[bottom][x] = i++
      }
      bottom--
      for (let y = bottom; y >= top; y--) {
          res[y][left] = i++
      }
      left++
  }
  return res
};