/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let sums = new Map([[0, 1]])
  for (let num of nums) {
    const next = new Map()
    for (let [sum, amount] of sums) {
      const plus = sum + num
      const minus = sum - num

      next.set(plus, next.has(plus) ? next.get(plus) + amount : amount)
      next.set(minus, next.has(minus) ? next.get(minus) + amount : amount)
    }
    sums = next
  }
  return sums.has(S) ? sums.get(S) : 0
};