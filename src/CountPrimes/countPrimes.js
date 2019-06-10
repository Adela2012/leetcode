/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var arr = [];
    for(var i = 0; i < n; i++) arr.push(false);
    var c = 0;
    for(var i = 2; i < n; i++) {
        if(arr[i] == false) {
            c++;
            for(var j = 2; j * i < n; j++) {
                arr[i*j] = true;
            }
        }
    }
    return c;
};