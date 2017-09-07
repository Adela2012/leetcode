/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var map = new Map();
    var n = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (map.has(c)) {
            map.delete(c);
            n++;
        } else map.set(c, 1);
    }
    return map.size == 0 ? 2 * n : 2 * n + 1;
};