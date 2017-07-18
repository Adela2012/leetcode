/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var s = 1;
    for(var i = digits.length - 1; i >= 0; i--) {
        var sum = digits[i] + s;
        digits[i] = sum % 10;
        s = parseInt(sum / 10);
    }
    if(s == 1) digits.unshift(s);
    return digits;
};