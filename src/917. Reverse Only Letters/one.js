/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let stack = []
  for (let s of S) {
      if (/[a-zA-Z]/.test(s)) {
          stack.push(s)
      }
  }
  let res = ''
  for (let s of S) {
      if (/[a-zA-Z]/.test(s)) {
          res += stack.pop()
      } else {
          res += s
      }
  }
  
  return res
};

// Complexity Analysis

// Time Complexity: O(N), where N is the length of S.

// Space Complexity: O(N). 