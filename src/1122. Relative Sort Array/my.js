/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = new Map()
  for (let i of arr1) {
    map.set(i, (map.get(i) || 0) + 1)
  }

  let arr = [], no = []
  for (let i of arr2) {
    if (map.has(i)) {
      for (let k = 0; k < map.get(i); k++) {
        arr.push(i)
      }
      map.delete(i)
    }
  }

  map.forEach(function (value, key) {
    for (let k = 0; k < value; k++) {
      no.push(key)
    }
  })

  no.sort((a, b) => a - b)

  return arr.concat(no)
};