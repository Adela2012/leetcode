/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(' ');
    if (pattern.length != arr.length) return false;
    var smap = new Map(); var pmap = new Map();
    var sa, pa;
    for (var i = 0; i < arr.length; i++) {
        if (smap.has(arr[i])) {
            sa = smap.get(arr[i]);
        }
        if (pmap.has(pattern.charAt(i))) {
            pa = pmap.get(pattern.charAt(i));
        }
        if(sa != pa) return false;
        smap.set(arr[i], i);
        pmap.set(pattern.charAt(i), i);
    }
    return true;
};