/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return !/.*LLL.*|.*A.*A.*/.test(s);
};