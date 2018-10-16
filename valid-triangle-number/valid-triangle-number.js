/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums = nums.sort((a, b) => a-b)
  let n = nums.length
  let count = 0
  for (let i = n - 1; i >= 2; i--) {
      let l = 0, r = i - 1
      while (l < r) {
          if (nums[l] + nums[r] > nums[i]) {
              count += r - l
              r--
          } else {
              l++
          }
      }
  }
  return count
};