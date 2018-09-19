/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let map = {}
  nums.forEach((i, ix) => {
      for(let j = ix + 1; j < nums.length; j++) {
          if(nums[j] > i) {
              map[i] = nums[j]
              break;
          }
      }
  })
  return findNums.map((i, ix) => {
      return (i in map) ?  map[i] : -1
  })
};