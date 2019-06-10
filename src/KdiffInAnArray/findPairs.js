/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(nums == null || nums.length == 0 || k < 0) return 0;
    var res = 0; 
    var map = new Map();
    var used = new Map();
    if(k == 0) {
        for(var i = 0; i < nums.length; i++) {
            if(map.has(nums[i]) && !used.has(nums[i])) {
                res++;
                used.set(nums[i], 1);
            } else{
                map.set(nums[i], 1); 
            }          
        }
        return res;
    }
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], 1);
    }
    for(var i = 0; i< nums.length; i++) {
        if(!used.has(nums[i]) && map.has(nums[i] + k)) {
            used.set(nums[i], 1);
            res++;
        }
    }
    return res;
};