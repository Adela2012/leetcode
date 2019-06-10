/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort()
  const wordSet = new Set(words)
  let res = ''
  for (const w of words) {
      let isValid = true
      let key = ''
      for (let i = 0; i < w.length - 1; i++) {
          key += w[i]
          if (!wordSet.has(key)) {
              isValid = false
              break
          }
      }
      if (isValid && w.length > res.length) {
          res = w
      }
  }
  return res
};