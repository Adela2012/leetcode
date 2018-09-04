/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
// Runtime: 52 ms
var uncommonFromSentences = function(A, B) {
  let s = A+' '+B
  let arr = s.split(' ')
  let map = {}
  arr.forEach(i => {
      if(i in map) {
          map[i] = false
      } else {
          map[i] = true
      }
  })
  return Object.keys(map).filter(i=>map[i])
};