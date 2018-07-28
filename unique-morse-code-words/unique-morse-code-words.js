/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  var arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  let set = new Set()
  words.map(word => set.add(Array.from(word).map(ch => arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]).join('')))
  return set.size
};