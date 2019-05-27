/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let N = customers.length
  let sum = 0
  let maxCur = 0
  let win = 0
  for (let i = 0; i < N; i++) {
      sum += grumpy[i] === 0 ? customers[i] : 0
      win += grumpy[i] * customers[i]
      if ( i >= X) win -= grumpy[i-X] * customers[i-X]
      maxCur = Math.max(win, maxCur)
  }
  
  
  return sum + maxCur
};