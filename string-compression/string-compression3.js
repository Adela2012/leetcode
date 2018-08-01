/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = chars.length - 1
  while (i >= 0) {
    let cur = chars[i]
    let c = 1
    while (cur === chars[--i]) c++
    if (c > 1) chars.splice(i + 2, c - 1, ...String(c))
  }
  return chars.length
};