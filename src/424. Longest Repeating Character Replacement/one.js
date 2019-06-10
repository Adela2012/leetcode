/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let maxCount = 0, maxLength = 0, count = Array(26).fill(0)
  for (let start = 0, end = 0; end < s.length; end++ ) {
      let endIndex = s.charCodeAt(end) - 'A'.charCodeAt()
      maxCount = Math.max(++count[endIndex], maxCount)
      while(end - start + 1 - maxCount > k) {
          let startIndex =  s.charCodeAt(start) - 'A'.charCodeAt()
          --count[startIndex]
          start++
      }
      maxLength = Math.max(end-start+1, maxLength)
  }
  return maxLength
};