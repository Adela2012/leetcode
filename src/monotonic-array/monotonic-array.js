/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let L = A.length
  let res = 0
  for (let i = 1; i < L; i++) {
      if (A[L - 1] >= A[0]) {
          if(A[i] >= A[i - 1]) {
              res++
          } else {
              res--
          }
      } else {
          if(A[i] <= A[i - 1]) {
              res++
          } else {
              res--
          }
      }
  }
  return res == L - 1
};