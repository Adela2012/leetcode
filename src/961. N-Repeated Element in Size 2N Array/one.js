/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  for (let k = 1; k <= 3; ++k) {
      for (let i = 0; i < A.length - k; ++i) {
          if (A[i] == A[i + k]) return A[i]
      }
  }
};

// Time Complexity: O(N), where N is the length of A.
// Space Complexity: O(1). 
// 64 ms	36.2 MB
