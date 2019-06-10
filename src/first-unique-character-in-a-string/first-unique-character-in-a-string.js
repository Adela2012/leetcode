/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var map = new Map()
  var index = new Map()
  Array.from(s).forEach((value, key) => {
    if (map.has(value)) {
      map.set(value, map.get(value) + 1)
    } else {
      map.set(value, 1)
      index.set(value, key)
    }
  })
  for (var [key, value] of map.entries()) {
    if (value == 1) {
      return index.get(key)
    }
  }
  return -1

};