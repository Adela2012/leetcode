/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length;
    for (let i = parseInt(len/2); i >= 1; i--) {
        if (len % i == 0) {
            let sub = s.substr(0, i);
            let m = len / i;
            let j = 1;
            for(; j <= m; j++) {
                if(sub != s.substr(i*j, i)) break;
            }
            if(j == m) return true;
        }
    }
    return false;
};