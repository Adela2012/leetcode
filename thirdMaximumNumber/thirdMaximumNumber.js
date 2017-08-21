/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var mx1 = null, mx2 = null, mx3 = null;
    for (var i = 0; i < nums.length; i++) {
       if(nums[i] == mx1 || nums[i] == mx2 || nums[i] == mx3) continue;
       if(mx1 == null || mx1 < nums[i]) {
           mx3 = mx2;
           mx2 = mx1;
           mx1 = nums[i];
       } else if(mx2 == null || mx2 < nums[i]) {
           mx3 = mx2;
           mx2 = nums[i]
       } else if(mx3 == null || mx3 < nums[i]) {
           mx3 = nums[i];
       }
    }
    return mx3 == null ? mx1 : mx3;
};