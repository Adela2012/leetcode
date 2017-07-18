/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' ').filter(function(val){
        return val.length > 0
    });
    if(arr.length == 0) return 0;
    return arr[arr.length - 1].length;
};