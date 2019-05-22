/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
  let map = new Map()

  for (let w of words) {
    if (!map.has(w[0])) {
      map.set(w[0], [])
    }
    map.get(w[0]).push(w.split(''))
  }
  let count = 0
  for (let s of S) {
    if (map.has(s)) {
      let list = map.get(s)
      map.delete(s)
      for (let arr of list) {
        arr.shift()
        if (arr.length == 0) {
          count++
          continue
        }
        if (!map.has(arr[0])) {
          map.set(arr[0], [])
        }
        map.get(arr[0]).push(arr)
      }
    }
  }
  return count
};
