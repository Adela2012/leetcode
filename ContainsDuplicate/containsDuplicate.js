/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) return true;
        else map.set(nums[i], i);
    }
    return false;
};