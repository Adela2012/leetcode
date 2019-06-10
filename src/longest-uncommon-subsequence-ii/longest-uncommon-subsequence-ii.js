/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    let map = new Map();
    for (let str of strs)
        if(map.has(str)) map.set(str, 0);
        else map.set(str, 1);
    let res = -1; 
    for (let [key, value] of map)
        if (value == 1 && !isSubstr(key, map)) 
            res = Math.max(res, key.length);
    return res;
};

var isSubstr = function(str, map) {
    for (let [key,value] of map)
        // 判断 str 不为 map 中 key 的子序列。 返回 true。
        if(key !== str && isSubseq(key, str)) return true;
    return false;
}

var isSubseq = function(str, s) {
    if(str.indexOf(s) != -1) return true;
    let i = 0, j = 0;
    while(i < str.length && j < s.length) {
        if(str.charAt(i) == s.charAt(j)) j++;
        i++;
    }
    if (j == s.length) return true;
    return false;
}