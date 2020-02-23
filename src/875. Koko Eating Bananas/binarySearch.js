/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let left = 1, right = Math.max(...piles)
  while(left < right) {
      let mid = (left + right) >> 1
      canDo(piles, H, mid) ? (right = mid) : (left = mid + 1)
  }
  return left
  
  function canDo(piles, H, K) {
      for (let p of piles) {
          H -= Math.ceil(p / K)
          if (H < 0) return false
      }
      return true
  }
};