/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums[0] < target && nums.length == 1) return 1;
    if(nums[0] >= target) return 0;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] >= target && target > nums[i - 1]) {
            return i;
        } 
    }
    return nums.length;
};