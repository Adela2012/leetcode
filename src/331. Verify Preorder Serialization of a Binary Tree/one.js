/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    let arr = preorder.split(',')
    let diff = 1
    for (let i of arr) {
        if (--diff < 0) return false
        if (i !== '#') { 
            diff += 2
        }
    }
    return diff == 0
};