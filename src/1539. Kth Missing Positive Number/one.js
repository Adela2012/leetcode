/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let left = 0, right = arr.length, mid
    while (left < right) {
        mid = (left + right) >> 1
        if (arr[mid] - 1 - mid < k) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left + k
};