/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let B = String(K).split('')
  let i = A.length - 1
  let j = B.length - 1
  let carry = 0
  let sum = []
  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
      const d1 = i < 0 ? 0 : A[i]
      const d2 = j < 0 ? 0 : Number(B[j])
      const ds = d1 + d2 + carry
      sum.unshift(ds % 10)
      carry = Math.floor(ds / 10)
  }
  return sum
};

// Runtime:252 ms	Memory:40.7 MB