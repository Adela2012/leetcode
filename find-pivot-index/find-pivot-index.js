/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (nums.length <= 1) return -1
    for (let i = 0; i < nums.length; i++) {
        let leftsum = helper(nums, 0, i - 1)
        let rightsum = helper(nums, i + 1, nums.length - 1)
        if (leftsum == rightsum) return i
    }

    return -1
};

var helper = function (nums, left, right) {
    let sum = 0
    for (let i = left; i <= right; i++) {
        sum += nums[i]
    }
    return sum
}