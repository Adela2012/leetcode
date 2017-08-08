/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var n = nums.length;
    var map = new Map();
    for (var i = 0; i < n; i++) {
       if(map.has(nums[i]) ) {
           map.set(nums[i], map.get(nums[i]) + 1);
       }else{
         map.set(nums[i], 1);  
       }
    }
    var k, v = 0;
    for(var  [key, value] of map){
        if(value > v) {
            v = value;
            k = key;
        }
    }
    return k;
};