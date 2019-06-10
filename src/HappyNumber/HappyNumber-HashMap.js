/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = new Map();
    while(true) {
        n = helper(n);
        if(!map.has(n)) {
            map.set(n,1);
            if(n == 1) return true;
        } else {
            return false;
        }
        
    }

};

var helper = function(n) {
    var sum = 0; var cur = 0;
    while(n > 0) {
        cur = n % 10
        n = parseInt(n / 10);        
        sum += Math.pow(cur, 2);
    }
    return sum;
}