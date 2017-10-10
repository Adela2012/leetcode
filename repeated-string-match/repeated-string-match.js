/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let cur = '';
    for(let i = 1; i *A.length <= 10000; i++ ) {
        cur += A;
        if(cur.indexOf(B) != -1) return i;
    }
    return -1;
};