/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if (c < 0) return false;
    let l = 0; let r = Math.floor(Math.sqrt(c));
    while(l <= r) {
        let sum = l * l + r * r;
        if(sum < c) {
            l++;
        } else if (sum > c) { 
            r--;
        } else {
            return true;
        }
    }
    return false;
    
};