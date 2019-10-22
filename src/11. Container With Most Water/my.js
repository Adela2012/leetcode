/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  for (let i = 0; i < height.length - 1; i++) {
      for (let j = i + 1; j < height.length; j++) {
          let m = Math.min(height[i], height[j])
          max = Math.max(max, m * (j - i))
      }
  }
  return max
};