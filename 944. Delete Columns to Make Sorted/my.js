/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let res = 0
  for (let i = 0; i < A[0].length; i++) {
      for (let j = 1; j < A.length; j++) {
          if (A[j].charCodeAt(i) - A[j - 1].charCodeAt(i) < 0) { 
              res++
              break
          }
          
      }
  }
  return res
};