/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let index = [0, 0]
    let res = []
    for (let i = 0; i < S.length; i++) {
        if (i === S.length - 1 || S[i] !== S[i + 1]) {
            index[1] = i
            if (index[1] - index[0] >= 2) {
                res.push(index)
            }
            index = [i + 1, i + 1]
        }
    }
    return res
};