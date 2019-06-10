/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let arr = []
  let res = []
  let l = 0
  for (let s of S) {
      arr.push(s)
      if (s == '(') {
          l++
      } else {
          l--
          if (l == 0 && arr.length >= 2) {
              res = res.concat(arr.slice(1, -1))
              arr = []
          }
      }
  }
  return res.join('')
};