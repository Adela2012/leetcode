/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let min = nums.length + 1
  for (let i = 0; i < nums.length; i++) {
      let res = nums[i]
      let j = i + 1
      while (res < s && j < nums.length) {
          res += nums[j]
          j++
      }
      if (res >= s && j <= nums.length) {
          min = Math.min(min, j - i)
      }
  }
  return min == nums.length + 1 ? 0 : min 
};