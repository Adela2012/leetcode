/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map()
  for (let i of arr) {
    map.set(i, map.has(i) ? map.get(i) + 1 : 1)
  }
  let set = new Set()
  for (let value of map.values()) {
    if (set.has(value)) {
      return false
    } else {
      set.add(value)
    }
  }
  return true
};