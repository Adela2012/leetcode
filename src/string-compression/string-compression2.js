/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let len = chars.length
  chars.push('end')
  let prev = chars.shift()
  let c = 1
  for (let i = 0; i < len; i++) {
    let cur = chars.shift()
    if (cur === prev) {
      c++
    } else {
      chars.push(prev)
      if (c != 1) {
        chars.push(...String(c).split(''))
      }
      prev = cur
      c = 1
    }
  }
  return chars.length

};