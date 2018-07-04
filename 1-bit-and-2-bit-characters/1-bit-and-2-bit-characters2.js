/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let i = 0;
    while (i < bits.length - 1) {
        if (bits[i] == 0) i++;
        else i += 2;
    }
    return i == bits.length - 1
};