/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var res = []; 
    var n = nums.length;
    for(var i = 0; i < n; i++) {
        nums[(nums[i] - 1) % n] += n;
    }
    for(var i = 0; i < n; i++) {
        if(nums[i] <= n) res.push(i + 1);
    }
    return res;
};