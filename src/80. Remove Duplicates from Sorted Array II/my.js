/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p = 0
  while (p < nums.length) {
    let n = p + 1
    while (nums[n] == nums[p]) {
      n++
    }
    if (n > p + 1) {
      nums.splice(p + 2, n - p - 2)
      p++
    }
    p++
  }
};