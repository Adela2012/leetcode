/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length - 1
  let carry = K
  let sum = []
  for (; i >= 0 || carry > 0; i--) {
      if (i >= 0) {
          carry += A[i]
      }
      sum.unshift(carry % 10)
      carry = Math.floor(carry / 10)
  }
  return sum
};

// Runtime:188 ms	Memory:40 MB