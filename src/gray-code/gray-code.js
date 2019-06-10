/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let res = []
    for (let i = 0; i < 2 ** n; i++) {
        res.push((i >> 1) ^ i)
    }
    return res
};