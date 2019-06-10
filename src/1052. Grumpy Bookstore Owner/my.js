/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  let N = customers.length
  let sum = 0
  for (let i = 0; i < N; i++) {
    if (grumpy[i] === 0) {
      sum += customers[i]
    }
  }

  let maxCur = 0
  for (let i = X; i <= N; i++) {
    let cur = 0
    for (let j = i - X; j < i; j++) {
      if (grumpy[j] === 1)
        cur += customers[j]
    }
    maxCur = Math.max(cur, maxCur)
  }

  return sum + maxCur
};