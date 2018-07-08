/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let n = seats.length
    let k = 0
    let res = 0
    for(let i = 0; i < n; ++i) {
      if (seats[i] == 1) {
          k = 0
      }  else {
          k++
          res = Math.max(res, parseInt((k+1)/2))
      }
    }
    for(let i = 0; i < n; ++i) {
        if(seats[i] == 1) {
            res = Math.max(res, i)
            break
        }
    }

    for(let i = n - 1; i >= 0; --i) {
        if(seats[i] == 1) {
            res = Math.max(res, n - 1 - i)
            break
        }
    }
    return res
};