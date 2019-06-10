/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let fast = 0
  let slow = 0
  do {
      fast = nums[nums[fast]]
      slow = nums[slow]
  } while(fast != slow)
         
  fast = 0
  while (fast != slow) {
      fast = nums[fast]
      slow = nums[slow]
  }

  return slow
  
};