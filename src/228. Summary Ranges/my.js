/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let start = i
    while (i + 1 < nums.length && nums[i] + 1 == nums[i + 1]) { i++ }
    if (i == start) {
      arr.push('' + nums[i])
    } else {
      arr.push(`${nums[start]}->${nums[i]}`)
    }
  }
  return arr
};