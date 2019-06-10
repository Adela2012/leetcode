/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let set = new Set()
  for (let a of A) {
      if (set.has(a)) {
          return a
      } else {
          set.add(a)
      }
  }
};
// 64 ms	36.2 MB
// Time Complexity: O(N), where N is the length of A.
// Space Complexity: O(N). 