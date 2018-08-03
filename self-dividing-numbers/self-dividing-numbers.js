/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = []
  for (let i = left; i <= right; i++) {
    if (i.toString().split('').every(val => i % parseInt(val) == 0)) {
      res.push(i)
    }
  }
  return res
};