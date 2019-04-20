/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let arr = []
  let low = 0
  let high = S.length
  for(let s of S) {
      if (s == 'I') {
          arr.push(low++)
      }
      if (s == 'D') {
          arr.push(high--)
      }
  }
  arr.push(low)
  return arr
};

// 88 ms	37.3 MB
// Time Complexity: O(N), where N is the length of S.
// Space Complexity: O(N). 