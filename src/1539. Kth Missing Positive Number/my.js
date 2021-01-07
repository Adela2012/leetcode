/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num = 0
    for (let i = 1; i <= arr.length + k; i++ ) {
        if (arr.indexOf(i) < 0) {
            num++
        }
        if (num == k) {
            return i
        }
    }
};