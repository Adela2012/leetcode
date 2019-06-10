/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false
  let p = -1;
  for (let i = 1; i < A.length - 1; i++) {
      if (A[i+1] < A[i] && A[i-1] < A[i]) {
         p = i
      } 
  }
  if (p == -1) return false
  for (let i = 0; i < A.length - 1; i++) {
      if ((A[i+1] <= A[i] && i < p) || (A[i+1] >= A[i] && i > p)) {
          return false
      }
  }
  return true
};

// 64 ms	37 MB