/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var ans = 0, i = 0;
    var map = new Map();
    for (var j = 0; j < s.length; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(i, map.get(s.charAt(j)));            
        }
        ans = Math.max(ans, j + 1 - i);
        map.set(s.charAt(j), j + 1);
    }
    return ans;
};