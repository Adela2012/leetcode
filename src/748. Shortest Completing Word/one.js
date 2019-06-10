/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let arr = Array(26).fill(0)
  let lp = licensePlate.toLowerCase().replace(/[^a-z]/g,'')
  setArr(arr, lp)
  
  let min = 'aaaaaaaaaaaaaaa'
  for (let word of words) {
      if (word.length < min.length && helper(word, arr)) {
          min = word
      }
  }
  
  return min
};

var helper = function (word, arr) {
  let map = Array(26).fill(0)
  setArr(map, word)
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 0 && map[i] < arr[i]) {
          return false
      }
  }
  return true
};

var setArr = function (arr, word) {
  for (let i of word) {
      arr[i.charCodeAt() - 'a'.charCodeAt()] += 1 
  }
}

// 80 ms	38 MB