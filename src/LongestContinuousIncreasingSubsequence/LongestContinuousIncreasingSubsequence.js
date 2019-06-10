/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let res = 0, cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 || nums[i] <= nums[i - 1]) {
            cur = i
        }
        res = Math.max(res, i - cur + 1)
    }
    return res
};