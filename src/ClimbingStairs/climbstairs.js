/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var t = parseInt(n / 2); var res = 1;
    for(var i = 1 ; i <= t; i++) {
        res += helper(n - i, i);
    }
    return res;
};

var helper = function (a, b) {
    var as = 1; var bs = 1;
    b = Math.min(a, a - b);
    for (var i = 0; i < b; i++) {
        as *= (a - i);
        bs *= (b - i);
    }
    return as / bs;
}