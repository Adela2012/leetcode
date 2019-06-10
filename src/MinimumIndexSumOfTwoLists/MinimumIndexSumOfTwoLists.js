/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var map = new Map(); var resmap = new Map();
    for (var i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }   
    for (var j = 0; j < list2.length; j++) {
        var sa = list2[j];
        if(map.has(sa)) {
            var k = map.get(sa) + j;
            if(resmap.has(k)) {
                var arr = resmap.get(k);
                arr.push(sa);
                resmap.set(k,arr);
            }else resmap.set(k, [sa]);
        }
    }
    var min = list1.length + list2.length, res;
    for(var [key,value] of resmap) {
        if(key < min) {
            res = value;
            min = key;
        }
    }
    return res;
    
};