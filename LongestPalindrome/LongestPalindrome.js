/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var map = new Map();
    var l = 0; is = false;
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (map.has(c)) map.set(c, map.get(c) + 1);
        else map.set(c, 1);
    }
    for (var [key, value] of map) {
        if(value % 2 == 0)  l += value;
        else { l+= (value - 1); is = true; }
    }
    return is ? l + 1 : l;
    
};