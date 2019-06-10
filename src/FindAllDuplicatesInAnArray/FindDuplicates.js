/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var res = [];
    for(var i = 0; i < nums.length; i++) {
        var index = Math.abs(nums[i]) - 1;
        if(nums[index] < 0) res.push(index + 1);
        nums[index] = -nums[index];
    }
    return res;
};