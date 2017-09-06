/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var map = new Map();
    for (var i = 0; i < s.length; i++) {
        var b = s.charAt(i);
        if(!map.has(b))
            map.set(b, 1);
        else map.set(b, map.get(b) + 1);
    }
    for (var i = 0; i < t.length; i++) {
        var c = t.charAt(i);
        if(map.has(c) && map.get(c) > 0)
            map.set(c, map.get(c) - 1);
        else return c;
    }
};