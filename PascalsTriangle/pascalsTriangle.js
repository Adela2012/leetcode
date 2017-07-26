/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows < 1) return [];
    var res = [[1]]; 
    for(var i = 1; i < numRows; i++) {
        var cur = [];       
        cur.push(1);        
        for(var j = 1; j < i; j++)
            cur.push(res[i - 1][j-1] + res[i - 1][j]);
        cur.push(1);
        res.push(cur);
    }
    return res;
};