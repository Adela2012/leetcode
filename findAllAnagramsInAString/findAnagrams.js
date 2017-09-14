/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var list = [];
    var map = new Map();
    var left = 0, right = 0, count = p.length;
    for(var i = 0 ; i < count; i++) {
        var pa = p.charAt(i);
        if(map.has(pa)) map.set(pa, map.get(pa)+1);
        else map.set(pa, 1);
    }
    
    while(right < s.length) {
        var sa = s.charAt(right);
        if(map.has(sa)) {
            if(map.get(sa) >= 1)
                count--;
            map.set(sa, map.get(sa)-1);  
        }     
        right++;
        
        if(count == 0) list.push(left);
        
        var sb = s.charAt(left);
        if(right - left == p.length) {
            if(map.has(sb) ){
                if (map.get(sb) >= 0) 
                    count++;      
                 map.set(sb, map.get(sb)+1); 
            }
            left++;
        }
    }
    return list;
    
};