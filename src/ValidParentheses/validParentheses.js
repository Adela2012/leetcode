/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 == 1)
        return false;
    while(s.indexOf('[]') != -1 || s.indexOf('()') != -1 || s.indexOf('{}') != -1) {
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        s = s.replace('()', '');
    }
    if(s.length == 0)
        return true;
    else return false;
};