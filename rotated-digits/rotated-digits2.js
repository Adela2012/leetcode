/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  let res = 0
  for (let i = 1; i <= N; i++) {
    let si = i + ''
    if (!/[347]/g.test(si) && /[2569]/g.test(si)) res++
  }
  return res
};