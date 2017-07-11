/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var rex = 0, re = x;
    while(x) {
        rex = rex * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return rex == re && rex >= 0;
};