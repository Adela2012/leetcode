/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let min = nums.length + 1
    let sum = 0
    let p = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= s) {
            min = Math.min(min, i - p + 1)
            sum -= nums[p++]
        }
    }
    return min == nums.length + 1 ? 0 : min
};