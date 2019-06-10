/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var res = 0;
    var map = new Map();
    
    for(var i = 0; i < points.length; i++) { 
        for(var j = 0; j < points.length; j++) {
            if(points[i] == points[j]) continue;
            var dis = get(points[i], points[j]);
            if(map.has(dis)) {
                map.set(dis, map.get(dis)+1);
            }else{
                map.set(dis, 1);
            }
        }
        
        for(var [key,value] of map) {
            res += value * (value - 1);
        }
        map.clear();
    }
    
    return res;
};
var get = function(m, n) {
    var x = m[0] - n[0];
    var y = m[1] - n[1];
    return x*x + y*y;
}
