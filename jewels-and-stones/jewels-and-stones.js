/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let set = new Set(J)
  let count = 0
  for(let i = 0; i < S.length; i++) {
      set.has(S[i]) && count++
  }
  return count
};