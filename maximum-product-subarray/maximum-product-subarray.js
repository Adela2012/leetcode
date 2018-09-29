/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = nums[0]
  for (let i = 1, imax = res, imin = res; i < nums.length; i++) {
      let tmp = imax
      imax = Math.max(Math.max(imin * nums[i], tmp * nums[i]), nums[i])
      imin = Math.min( Math.min(imin * nums[i], tmp * nums[i]), nums[i])
      
      res = Math.max(res, imax)
  }
  return res
};
