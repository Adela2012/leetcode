/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let res = []
  A.reduce((s, cur) => {
      s = (s * 2 + cur) % 5
      res.push(s === 0)
      return s
  }, 0)
  return res
};
// 76 ms	38.2 MB