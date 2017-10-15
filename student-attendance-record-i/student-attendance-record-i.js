/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let A = 0, L = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) == 'A') A++;
        if(A > 1) return false;
        if(s.charAt(i) == 'L' && i + 2 < s.length)
            if(s.charAt(i+1) == 'L' && s.charAt(i+2) == 'L')
                return false;
    }
    return true;
};