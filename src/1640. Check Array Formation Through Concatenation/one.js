/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let str = arr.toString()+','
    for (let i = 0; i < pieces.length; i++) {
        let s = pieces[i].toString()+','
        if (!str.includes(s)) return false 
    }
    return true
};