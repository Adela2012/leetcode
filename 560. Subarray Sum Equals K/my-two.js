/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
      let sum = 0
      for (let j = i; j < nums.length; j++) {
          sum += nums[j]
          if (sum == k) {
              count++
          }
      }
  }
  return count
};

// **Complexity Analysis**
// Time complexity : O(n^2). We need to consider every subarray possible.
// Space complexity : O(1). Constant space is used.