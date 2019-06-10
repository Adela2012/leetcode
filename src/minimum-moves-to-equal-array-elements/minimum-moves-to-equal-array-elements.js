/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = nums[0];
    let sum = 0;
    let len = nums.length;
    for (let num of nums) {
        sum += num;
        min = Math.min(min, num);
    }
    return sum - min * len;
};