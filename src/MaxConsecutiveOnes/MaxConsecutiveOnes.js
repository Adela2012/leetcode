/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var c = 0;var res = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] == 1) c++;
        else c = 0;
        res = Math.max(c, res);
    }
    return res;
};