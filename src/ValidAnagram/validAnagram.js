/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var smap = new Map(), tmap = new Map();
    if (s.length != t.length) return false;
    for (var i = 0; i < s.length; i++) {
        if(!smap.has(s.charAt(i))) 
            smap.set(s.charAt(i), 1);
        else 
            smap.set(s.charAt(i), smap.get(s.charAt(i))+1);
        if(!tmap.has(t.charAt(i))) 
            tmap.set(t.charAt(i), 1);
        else 
            tmap.set(t.charAt(i), tmap.get(t.charAt(i))+1);
    }
    
    for(var [key, value] of smap) {
        if(value != tmap.get(key)) return false;
    }
    return true;
};