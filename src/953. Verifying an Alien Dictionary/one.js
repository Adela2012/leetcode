/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let map = new Map()
  for (let i = 0; i < order.length; i++) {
      map.set(order[i], i)
  }
  
  search:
  for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i]
      let word2 = words[i + 1]
      
      
      for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
          if(word1[j] != word2[j]) {
              if (map.get(word1[j]) < map.get(word2[j])) {
                  continue search
              } else {
                  return false
              }
          }
      }
      
      if (word1.length > word2.length) return false
      
  }
  
  return true
};