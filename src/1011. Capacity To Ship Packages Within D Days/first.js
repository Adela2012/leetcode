/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let left = 0, right = 0
  for (let w of weights) {
      left = Math.max(left, w)
      right += w
  }
  
  while (left < right) {
      let mid = (right + left) >> 1, need = 1, cur = 0
      for (let w of weights) {
          if (cur + w > mid) {
              need += 1
              cur = 0
          }
          cur += w
      }
      if (need > D) left = mid + 1
      else right = mid
  }
  
  return left
};