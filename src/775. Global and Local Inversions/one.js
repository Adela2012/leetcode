/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function (A) {
  let N = A.length

  for (let i = 0; i < N; i++) {
    for (let j = i + 2; j < N; j++) {
      if (A[i] > A[j]) return false
    }
  }
  return true
};