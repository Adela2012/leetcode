/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let n = chars.length
  for (let i = 0; i < n; i++) {
    let c = 1
    while (chars[i] == chars[i + 1] && i + 1 < n) {
      c++
      i++
    }
    chars.push(chars[i])
    if (c != 1) chars.push(...String(c).split(''))
  }
  chars.splice(0, n)
  return chars.length
};