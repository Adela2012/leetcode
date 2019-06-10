/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length <= 1) return -1
    let sum = nums.reduce(function(a, b) {
        return a+b
    })
    let leftsum = 0
    for(let i = 0; i < nums.length; i++) {
        if(leftsum == sum-leftsum-nums[i]) return i
        leftsum += nums[i]
    }
    return -1
};