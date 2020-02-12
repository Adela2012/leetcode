/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let set = new Set()
  for (let i of arr) {
      if (set.has(2*i) || i % 2 == 0 && set.has(Math.floor(i / 2))) return true
      set.add(i)
  }
  return false
};