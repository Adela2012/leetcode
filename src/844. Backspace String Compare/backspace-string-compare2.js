/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let i = S.length - 1
    let j = T.length - 1
    let del
    while (i >= 0 || j >= 0) {
        del = 0
        while(del > 0 || S[i] === '#') {
            if(S[i] === '#') del++
            else del--
            i--
        }
        del = 0
        while(del > 0 || T[j] === '#') {
            if(T[j] === '#')  del++
            else del--
            j--
        }
        if(S[i] !== T[j]) return false
        i--
        j--
    }
    return true
};