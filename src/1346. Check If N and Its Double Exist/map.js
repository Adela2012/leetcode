/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], i)
  }
  for (let i = 0; i < arr.length; i++) {
      let double = arr[i] * 2
      if (map.has(double) && map.get(double) !== i) return true
  }
  return false
};