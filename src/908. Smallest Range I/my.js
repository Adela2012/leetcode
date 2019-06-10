/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  A = A.sort((a,b)=>a-b)
  let diff = A[A.length - 1] - A[0]
  if (diff > 2*K) {
      return diff - 2*K
  } else {
      return 0
  }
};

// 92 ms	37.8 MB	