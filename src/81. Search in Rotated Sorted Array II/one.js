/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  function helper(left, right) {
    if (left > right) return false
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) return true
    else if (target < nums[mid]) {
      return helper(left, mid - 1) || (nums[mid] >= nums[right] ? helper(mid + 1, right) : false)
    }
    else if (nums[mid] < target) {
      return helper(mid + 1, right) || (nums[mid] <= nums[left] ? helper(left, mid - 1) : false)
    }
  };
  return helper(0, nums.length - 1);
};


