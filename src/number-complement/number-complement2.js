/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bits = num.toString(2)
    let mask = parseInt('1'.repeat(bits.length), 2)
    return num ^ mask
};