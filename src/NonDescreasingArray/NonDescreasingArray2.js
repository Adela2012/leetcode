/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var c = 0;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i-1])  {
            c++;
            if(c == 2) return false;
            if(i != 1 && i != nums.length - 1)
                if(nums[i] < nums[i - 2] && nums[i + 1] < nums[i - 1] ) return false;
        }
    }
    return true;
};