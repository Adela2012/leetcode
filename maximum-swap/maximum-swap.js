/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let nums = num.toString().split('')
  let arr = Array(10)
  
  for (let i = 0; i < nums.length; i++) {
      arr[nums[i]] = i 
  }
  
  for (let i = 0; i < nums.length; i++) {
      for (let k = 9; k > nums[i]; k--) {
          if (arr[k] > i) {
              let tmp = nums[arr[k]]
              nums[arr[k]] = nums[i]
              nums[i] = tmp
              return Number(nums.join(''))
          }
      }
  }
  return num
};