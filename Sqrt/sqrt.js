/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
    var low = 0, high = x;
    while(low <= high) {
        var mid = parseInt((low + high) / 2);
        if(mid < x / mid) {
            low = mid + 1;
        } else if (mid > x / mid) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return high;
};