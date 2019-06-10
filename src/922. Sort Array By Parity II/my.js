/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let arr = []
  let i = 0
  let j = 1
  for (let a of A) {
      if (a % 2 == 0) {
          arr[i] = a
          i += 2
      } else {
          arr[j] = a
          j += 2
      }
  }
  
  return arr
};

// 104 ms	40.2 MB
// Time Complexity: O(N), where N is the length of A.

// Space Complexity: O(N).