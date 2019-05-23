/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0
  let sum = 0
  let map = new Map()
  map.set(sum, 1)
  for (let i = 0; i < nums.length; i++) {
     sum += nums[i]
      if (map.has(sum - k)) {
          count += map.get(sum - k)
      }
      if(!map.has(sum)) {
          map.set(sum, 1) 
      } else {
          map.set(sum, map.get(sum)+1)
      }
  }
  return count
};

// **Complexity Analysis**
// Time complexity : O(n). The entire numsnums array is traversed only once.
// Space complexity : O(n). Hashmap mapmap can contain upto nn distinct entries in the worst case.