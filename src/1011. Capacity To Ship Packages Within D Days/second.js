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
      let mid = (right + left) >> 1
      if (canShip(weights, D, mid)) {
          right = mid
      } else  {
          left = mid + 1
      }
  }
  
  return left
  
  function canShip(weights, D, K) {
      let cur = K // cur 表示当前船的可用承载量
      for (let w of weights) {
          if (w > K) return false
          if (cur < w) cur = K, D--
          cur -= w
      }
      return D > 0 // 能否在D天内运完
  }
};