/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = nums.length
  while (i--) {
      if (nums[i - 1] == nums[i] && nums[i - 2] == nums[i - 1]) {
          nums.splice(i, 1)
      }
  }
};