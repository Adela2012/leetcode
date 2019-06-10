/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    return n == 0 ? '' : convertToTitle(parseInt(--n / 26)) + String.fromCharCode(65 + parseInt(n % 26));   
};