/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0
  let right = nums.length - 1
  for (let i = 0; i <= right; i++) {
      while (nums[i] == 2 && i < right) swap(i, right--, nums)  
      while (nums[i] == 0 && i > left) swap(i, left++, nums)  
  }
};

var swap = function (a, b, nums) {
  var t = nums[a]
  nums[a] = nums[b]
  nums[b] = t
}