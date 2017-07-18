/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = 1; var c = [] ;var sum = 0;
    while (a.charAt(a.length - i) || b.charAt(b.length - i)) {
        var anum = a.charAt(a.length - i) == '' ? 0 : parseInt(a.charAt(a.length - i));
        var bnum = b.charAt(b.length - i) == '' ? 0 : parseInt(b.charAt(b.length - i));
        c.unshift((sum + anum + bnum) % 2);
        sum = parseInt((anum + bnum + sum) / 2) ;
        i++;
    }
    if(sum == 1) c.unshift(1);
    return c.join('');
};