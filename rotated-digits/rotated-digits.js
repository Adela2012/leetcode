/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  var map = new Map([['2', '5'], ['5', '2'], ['6', '9'], ['9', '6'], ['8', '8'], ['0', '0'], ['1', '1']])
  let res = 0
  for (let i = 1; i <= N; i++) {
    let si = String(i)
    let num = Array.from(si).map(n => map.get(n)).join('')
    res += num != '' && num.length == si.length && num != si ? 1 : 0
  }
  return res
};