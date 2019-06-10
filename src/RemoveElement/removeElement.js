/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    while(nums[i] != null) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    } 
    return nums.length;
};