/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;    
    var smap = new Map(), tmap = new Map();  
    var sa, ta;
    for(var i = 0; i < s.length; i++) {
        if(smap.has(s.charAt(i))) sa = smap.get(s.charAt(i));  
        if(tmap.has(t.charAt(i))) ta = tmap.get(t.charAt(i));
        if(ta != sa) return false; 
        tmap.set(t.charAt(i),i);
        smap.set(s.charAt(i),i);
    }
    return true;
};