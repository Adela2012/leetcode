/**
 * @param {string} S
 * @return {string}
 */
 var removeOuterParentheses = function(S) {
    const stack = []
    let res = ''
    for(let i of S) {
        if (i == '(') {
            stack.push(i)
            if (stack.length > 1) {
                res += '('
            }
        } else if (i == ')') {
             stack.pop()
            if (stack.length > 0) {
                res += ')'
            } 
        }
    }
    return res
};