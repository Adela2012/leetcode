/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left + 1 < right) {
    let mid = ((right - left) >> 1) + left
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid]
    }
    else if (nums[mid] > nums[right]) {
      left = mid
    } else {
      right = mid
    }
  }
  return Math.min(nums[left], nums[right])
};