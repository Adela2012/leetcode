/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    return helper(bits, 0)
};

var helper = function (bits, i) {
    let n = bits.length;
    if (i == n) return false;
    if (i == n - 1) return bits[i] == 0;
    if (bits[i] == 0) return helper(bits, i + 1)
    return helper(bits, i + 2);
}