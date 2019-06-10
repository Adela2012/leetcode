/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let res = ''
  let r = S.length - 1
  for (let s of S) {
      if (/[a-zA-Z]/.test(s)) {
          while(!/[a-zA-Z]/.test(S.charAt(r))) {
              r--
          }
          res += S.charAt(r--)
      } else {
          res += s
      }
  }
  return res
};