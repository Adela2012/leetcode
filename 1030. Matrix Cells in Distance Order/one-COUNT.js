/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let counter = Array(R+C+1).fill(0)
  for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
          let dist = Math.abs(r - r0) + Math.abs(c - c0)
          console.log(r, c, 'dist',dist)
          counter[dist + 1] += 1
      }
  }
  
  for (let i = 1; i < counter.length; i++) {
      counter[i] += counter[i - 1]
  }
  
  let ans = Array(R*C).fill(0)
  for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
          let dist =  Math.abs(r - r0) + Math.abs(c - c0)
          ans[counter[dist]] = [r, c]
          counter[dist]++
      }
  }
  
  return ans
};