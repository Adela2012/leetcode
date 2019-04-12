/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let j = 1
  for (let i = 0 ; i < A.length; i+=2) {
      if (A[i] % 2 == 1) {
          while (A[j] % 2 == 1) {
              j += 2
          }
          
          let tmp = A[i]
          A[i] = A[j]
          A[j] = tmp
      }
  }
  return A
};

// 100 ms	38.7 MB

// Time Complexity: O(N), where N is the length of A.

// Space Complexity: O(1). 