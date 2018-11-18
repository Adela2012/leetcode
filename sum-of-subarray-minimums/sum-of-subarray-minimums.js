/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  let sum = 0
  let mod = Math.pow(10,9) + 7
  let N = A.length
  
  for (let i = 0; i < N; i++) {
      let left = i - 1, right = i + 1
      while (left >= 0 && A[left] >= A[i]) left--
      while (right < N && A[right] > A[i]) right++
      sum = (sum + (i - left) * (right - i) * A[i] % mod) % mod
  }
  return sum
};