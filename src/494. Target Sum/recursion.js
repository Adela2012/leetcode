/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let count = 0
  calculate(nums, 0, 0, S)
  return count
  
  function calculate(nums, i, sum, S) {
      if (i == nums.length) {
          sum == S && count++
      } else {
          calculate(nums, i + 1, sum + nums[i], S)
          calculate(nums, i + 1, sum - nums[i], S)
      }
  }
  
};