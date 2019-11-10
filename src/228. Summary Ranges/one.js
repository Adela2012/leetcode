/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let arr = []
  for (let i = 0, left = nums[0]; i < nums.length; i++) {
    if (nums[i] + 1 != nums[i + 1]) {
      arr.push(nums[i] == left ? `${nums[i]}` : `${left}->${nums[i]}`)
      left = nums[i + 1]
    }
  }
  return arr
};