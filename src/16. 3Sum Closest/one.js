/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let res = Number.MAX_VALUE
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1, k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (Math.abs(target - res) >= Math.abs(target - sum)) res = sum
      if (sum > target) k--
      else if (sum < target) j++
      else return res
    }
  }
  return res
};