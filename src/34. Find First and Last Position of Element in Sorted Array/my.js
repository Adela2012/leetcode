/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1
  let first = -1, last = -1, mid = -1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)

    if (nums[mid] == target) {
      first = mid, last = mid
      while (nums[first - 1] == target) {
        first--
      }
      while (nums[last + 1] == target) {
        last++
      }
      return [first, last]
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return [first, last]
};