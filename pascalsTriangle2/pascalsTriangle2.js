/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [];
    if(rowIndex < 0) return res;
    for(var i = 0 ; i <= rowIndex; i++) {
        res.unshift(1);
        for(var j = 1; j < res.length - 1; j++) {
            res[j] = res[j] + res[j+1];
        }
    }
    return res;
};