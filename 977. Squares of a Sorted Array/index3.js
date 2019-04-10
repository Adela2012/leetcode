/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let j = 0;
  while (j < A.length && A[j] < 0) {
      j++
  }
  let i = j - 1
  
  let arr = []
  while (i >= 0 && j < A.length) {
      if (A[i]*A[i] > A[j]*A[j]) {
          arr.push(A[j]*A[j])
          j++
      } else {
          arr.push(A[i]*A[i])
          i--
      }
  }
  
  while (i>=0) {
      arr.push(A[i]*A[i])
      i--
  }
  
  while (j < A.length) {
      arr.push(A[j]*A[j])
      j++
  }
  
  return arr
};

// 112 ms	42 MB