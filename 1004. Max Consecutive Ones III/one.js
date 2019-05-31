/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let start = 0, end = 0
  for (; end < A.length; end++) {
     if (A[end] == 0) K--
     if (K < 0 && A[start++] == 0) K++
  }
  return end - start
};