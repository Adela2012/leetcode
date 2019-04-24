/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let arr = []
  let l = 0
  for (let s of S) {
      if (s == '(' && l++ > 0) arr.push(s)
      if (s == ')' && l-- > 1) arr.push(s)
  }
  return arr.join('')
};
// 68 ms	36.5 MB