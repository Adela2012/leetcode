/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  let set = new Set()
  for (let S of A) {
      let arr = Array(52).fill(0)
      for (let i in S) {
          arr[S.charCodeAt(i) - 'a'.charCodeAt() + 26 * (i % 2)] += 1
      }
      set.add(arr.join(''))
  }
  return set.size
};
 