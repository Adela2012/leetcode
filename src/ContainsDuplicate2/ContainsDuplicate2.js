/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = new Map();
    var res = false;
    for(var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) 
            res = i - map.get(nums[i]) <= k ? true : false;
        if(res == true) return res;
        map.set(nums[i], i)
        
    }
    return res;
};