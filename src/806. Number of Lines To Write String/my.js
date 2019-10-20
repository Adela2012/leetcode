/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  let sum = 0, h = 1
  for (let i = 0; i < S.length; i++) {
    let c = widths[S[i].charCodeAt() - 97]
    if (sum + c <= 100) sum += c
    else {
      sum = c
      h++
    }
  }
  return [h, sum]
};