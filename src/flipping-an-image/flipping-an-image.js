/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    let res = [];
    for (let i = 0; i < A.length; i++) {
        let arr = A[i];
        let cur = [];
        for (let j = arr.length - 1; j >= 0; j--) {
            let index = arr[j] === 1 ? 0 : 1;
            cur.push(index)
        }
        res.push(cur)
    }
    return res
};