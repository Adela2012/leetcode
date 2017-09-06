/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var m = t.charCodeAt(s.length);
    for (var i = 0; i < s.length; i++) m = m + t.charCodeAt(i) - s.charCodeAt(i);
    return String.fromCharCode(m);
};