/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    if (!nums || nums.length == 0) return 0
    let m = {}
    let maxTimes = 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let item = m[num]
        if (item) {
            item.right = i
            item.times++
            maxTimes = Math.max(item.times, maxTimes)
        } else {
            m[num] = {
                times: 1,
                left: i,
                right: i
            }
            maxTimes = Math.max(1, maxTimes)
        }
    }
    let min = 2147483647
    for (let i in m) {
        let item = m[i]
        if (item.times == maxTimes) {
            if (item.left == item.right) {
                min = Math.min(1, min)
            } else {
                min = Math.min(item.right - item.left + 1, min)
            }
        }
    }
    return min
};