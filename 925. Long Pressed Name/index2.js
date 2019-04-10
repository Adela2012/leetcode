/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let j = 0
  for (let c of name) {
      if (j == typed.length) return false
      if (typed.charAt(j) != c) {
          if (j == 0 || typed.charAt(j -1) != typed.charAt(j)) return false
          let cur = typed.charAt(j)
          while (j < typed.length && typed.charAt(j) == cur) j++
          if (j == typed.length || typed.charAt(j) != c) return false
      }
      j++
  }
  return true
};

// 64 ms	35.3 MB
// Time Complexity: O(N+T), where N,T are the lengths of name and typed.
// Space Complexity: O(1) in additional space complexity. (In Java, .toCharArray makes this O(N), but this can be easily remedied.) 