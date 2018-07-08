/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let l = seats.length
    let left = Array(l).fill(l)
    let right = Array(l).fill(l)
    for (let i = 0; i < l; i++) {
        if (seats[i] == 1) left[i] = 0
        else if (i > 0) left[i] = left[i - 1] + 1
    }
    for (let i = l - 1; i >= 0; i--) {
        if (seats[i] == 1) right[i] = 0
        else if (i < l - 1) right[i] = right[i + 1] + 1
    }
    let res = 0
    for (let i = 0; i < l; ++i) {
        if (seats[i] == 0)
            res = Math.max(res, Math.min(left[i], right[i]))
    }
    return res
};