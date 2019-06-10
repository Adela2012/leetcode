/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let arr = []
  for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
          arr.push([r, c])
      }
  }
  arr.sort((a, b) => {
      return Math.abs(a[0] - r0) + Math.abs(a[1] - c0) - Math.abs(b[0] - r0) - Math.abs(b[1] - c0) 
  })
  return arr
};