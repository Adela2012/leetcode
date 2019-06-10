/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  let min = A[0], max = A[0]
  for (let a of A) {
      min = Math.min(min, a)
      max = Math.max(max, a)
  }
  return Math.max(0, max-min-2*K)
};

// 64 ms	37 MB
// Time Complexity: O(N), where N is the length of A.
// Space Complexity: O(1). 