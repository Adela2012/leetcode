/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    swap(nums, i, j)
  }
  reverse(nums, i + 1)
};

function swap(nums, i, j) {
  let tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
};

function reverse(nums, start) {
  for (let i = start, j = nums.length - 1; i < j; i++ , j--)
    swap(nums, i, j)
} 