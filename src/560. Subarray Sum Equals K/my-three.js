/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = [0]
  for (let i = 1; i <= nums.length; i++) {
      sum[i] = sum[i-1] + nums[i - 1]
  }
  let count = 0
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j <= nums.length; j++) {
          if (sum[j] - sum[i] == k) {
              count++
          }
      }
  }
  return count
};