/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let res = [];
    for (let str of arr) {
        res.push(str.split('').reverse().join(''));
    }
    return res.join(' ');
};