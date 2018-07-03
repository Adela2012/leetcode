/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    return A.map(a => a.reverse().map(b => b === 1 ? 0 : 1))
}