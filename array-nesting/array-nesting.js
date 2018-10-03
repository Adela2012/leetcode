/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
      let size = 0
      let index = i
      while (nums[index] >= 0) {
          let tmp = nums[index]
          nums[index] = -1
          index = tmp
          size++
      }
      res = Math.max(res, size)
  }
  return res
};