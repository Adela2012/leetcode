/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  let sum = 0
  for (let B of words) {
      if (helper(S, B)) {
          sum += 1
      }
  }
  return sum
};

var helper = function (A, B) {
  let a = 0, b = 0
  while (b < B.length && a < A.length) {
      if (A.charAt(a) === B.charAt(b) ) {
          a++; b++;
      } else {
          a++;
      }
  }
  return b == B.length
}