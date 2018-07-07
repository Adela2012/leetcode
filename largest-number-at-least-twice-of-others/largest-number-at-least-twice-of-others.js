/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max = nums[0]
    let cur = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            cur = i
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i] * 2 && i != cur) return -1
    }

    return cur

};