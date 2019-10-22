/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0, r = height.length - 1
  let s = 0
  while (l < r) {
    let h = Math.min(height[l], height[r])
    let a = (r - l) * h
    s = Math.max(a, s)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return s
};