/**
 * @param {number[]} A
 * @return {number}
 */
// Runtime: 52 ms
var peakIndexInMountainArray = function(A) {
  let left = 0
  let right = A.length - 1
  while(left < right) {
      let mid = parseInt((right - left) / 2) + left
      if (A[mid + 1] > A[mid]){
          left = mid + 1
      } else {
          right = mid
      }
  }
  return left

};