/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length < 2) return 0
    let first = nums[0]
    let second = -Infinity
    let cur = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first
            first = nums[i]
            cur = i
        } else if (nums[i] > second) {
            second = nums[i]
        }
    }
    if (first < second * 2) return -1
    return cur

};