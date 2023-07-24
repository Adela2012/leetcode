/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), j = 0, ans = 0
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], i)
        }
        ans = Math.max(ans, j - i + 1)
        
    }
};