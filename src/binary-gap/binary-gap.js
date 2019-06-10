/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  let res = 0
  var bin = N.toString(2).split('1')
  for (let i = 1; i < bin.length - 1; i++) {
    res = Math.max(bin[i].length + 1, res)
  }
  return res
};