/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s == '') return true;
    var s = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    for(var i = 0; i <= s.length/2; i++) {
        if(s.charAt(i) != s.charAt(s.length - 1 - i)) return false;
    }
    return true;
};