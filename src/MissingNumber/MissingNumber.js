/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = (1 + nums.length) * nums.length / 2;
    for(var i = 0; i < nums.length; i++) sum -= nums[i];
    return sum;
};