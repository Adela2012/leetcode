/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var hash = new Map();
    for (var i of nums) {
      if(hash.has(i))  hash.set(i,hash.get(i)+1);
      else hash.set(i,1);
      
    }
    var res = 0;
    for (var [key,value] of hash) {
        if(hash.has(key+1)) {
           res = Math.max(res, value + hash.get(key+1)); 
        }
    }
    return res;

};