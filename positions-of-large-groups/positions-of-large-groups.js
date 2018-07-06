/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let m = []; let j = -1; let res = [];
    for (let i = 0; i < S.length - 1; i++) {
        if (i > 0 && S[i] == S[i + 1] && j >= 0) {
            m[j][1] = i + 1
        } else {
            if (m[j] && m[j][1] - m[j][0] >= 2) res.push(m[j])
            i == 0 && S[i] == S[i + 1] ? m.push([i, i]) : m.push([i + 1, i + 1])
            j++

        }
        if (i == S.length - 2 && m[j][1] - m[j][0] >= 2) res.push(m[j])
    }
    return res
};