/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let arr = n.toString(2).split('')
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] == arr[i - 1]) return false
  }
  return true
};