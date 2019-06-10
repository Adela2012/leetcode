/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    if(M == null) return null;
    var rows = M.length;
    var cols = M[0].length;
    var res = [];
    
    for (var i = 0; i < rows; i++) {
        var cur = [];
        for(var j = 0; j < cols; j++) {
            var c = 0;
            var sum = 0;
            for(var x = -1 ; x <= 1; x++ ) {
                for(var y = -1; y <= 1; y++) {
                    if(isValid(x+i,y+j,rows,cols)) {
                       c++;
                       sum += M[i+x][j+y];
                       }
                }
            }
            cur.push(parseInt(sum / c));
        }
        res.push(cur);
    }
    return res;
};
var isValid = function (x,y,rows,cols){
    return x >= 0 && y >= 0 && x < rows && y < cols;
};