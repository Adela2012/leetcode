/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let n = seats.length
    let prev = -1, future = 0
    let res = 0
    for (let i = 0; i < n; ++i) {
        if (seats[i] == 1) {
            prev = i
        } else {
            while (future < n && seats[future] == 0 || future < i) {
                future++
            }
            let left = prev == -1 ? n : i - prev;
            let right = future == n ? n : future - i;
            res = Math.max(res, Math.min(left, right))
        }
    }
    return res
};