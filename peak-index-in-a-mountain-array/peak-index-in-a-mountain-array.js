/**
 * @param {number[]} A
 * @return {number}
 */
// Complexity Analysis
// Time Complexity: O(logN), where N is the length of A.
// Space Complexity: O(1).
// Runtime: 52 ms
var peakIndexInMountainArray = function(A) {
  let left = 0
  let right = A.length - 1
  while(left < right) {
      let mid = parseInt((right - left) / 2) + left
      if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
          return mid 
      } else if (A[mid + 1] > A[mid] && A[mid] > A[mid - 1]){
          left = mid
      } else if (A[mid + 1] < A[mid] && A[mid] < A[mid - 1]){
          right = mid
      }
  }

};