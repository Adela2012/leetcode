/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for(let i = 0; i < arr.length;) {
        let num = arr[i]
        let pIndex = pieces.findIndex(p => p[0] == num)
        if (pIndex < 0)  return false
        else {
            let pArr = pieces.splice(pIndex, 1)[0]
            for (let j = 0; j < pArr.length; j++) {
                if (pArr[j] !== arr[i]) return false
                else i++; 
            }
        }
    }
    return pieces.length == 0
};s