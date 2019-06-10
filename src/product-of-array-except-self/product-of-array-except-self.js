/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = []
  for (let i = 0, tmp = 1; i < nums.length; i++) {
      res[i] = tmp
      tmp *= nums[i]
  }
  for (let j = nums.length - 1, tmp = 1; j >= 0; j--) {
      res[j] *= tmp
      tmp *= nums[j]
  }
  return res
};