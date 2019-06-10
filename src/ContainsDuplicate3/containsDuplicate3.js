/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var map = new Map();
    for(var i = 0; i < nums.length; i++)
        for(var j = i+1; j < nums.length; j++)
            if(Math.abs(nums[j] - nums[i]) <= t && j - i <= k) return true;
    return false;
};