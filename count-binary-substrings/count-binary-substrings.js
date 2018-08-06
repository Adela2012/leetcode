/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  if (s.length <= 1) return 0
  var pre = 0
  var cur = 1
  var c = 0

  for (var i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) cur++
    else {
      pre = cur
      cur = 1
    }
    if (pre >= cur) c++
  }
  return c
};