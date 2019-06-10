/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A.sort((a,b)=>a-b)
  for (let i = 0; K > 0 && i < A.length && A[i] < 0; i++, K--) {
      A[i] = -A[i]
  }
  
  let res = 0, min = Number.MAX_VALUE
  for (let a of A) {
      res += a
      min = Math.min(min, a)
  }
  return res - (K%2)*min*2
};