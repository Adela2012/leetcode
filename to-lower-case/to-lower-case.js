/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
  return Array.from(str).map(ch => (ch >= 'A' && ch <= 'Z') ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch).join('')
};