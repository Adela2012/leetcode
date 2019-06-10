/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var c = 0;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i-1])  {
            c++;
            if(i-2<0 || nums[i-2] <= nums[i])
                nums[i-1] = nums[i];                    
            else nums[i] = nums[i-1];
        }
    }
    return c <= 1;
};