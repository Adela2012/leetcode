/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expendAroundCenter(s, l, r) {
        while(l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)){
            l--; 
            r++;
        }
        return s.substr(l + 1, r - l - 1);
    }
    var longest = s.substr(0, 1);
    var p, q;
    for(var i = 0; i < s.length; i++) {
        p = expendAroundCenter(s, i, i);
        if (p.length > longest.length)
           longest = p;
        q = expendAroundCenter(s, i, i+1);
        if(q.length > longest.length) 
           longest = q;
    }
    return longest;
};