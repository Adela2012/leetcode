/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let res = ''; let arr = [];
    for (let sa of s)
        if (/[euioaEUIOA]/.test(sa))  arr.push(sa); 
    let j = arr.length - 1;
    for (let sb of s)
        if (/[euioaEUIOA]/.test(sb)) res += arr[j--];
        else res += sb;
    return res;
};