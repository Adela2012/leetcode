/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var cur = 0, res = 0;
    for(var i in nums) {
        var num = nums[i];
        cur = Math.max(num, num + cur);
        res = Math.max(cur, res);
        console.log(num,cur,res)
    }
    return res;
};