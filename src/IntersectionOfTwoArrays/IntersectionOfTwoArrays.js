/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res = [];
    var smap = new Map();
    var bmap = new Map();
    for(var i = 0; i < nums1.length; i++) {
        smap.set(nums1[i],i);
    }
    for(var i = 0; i < nums2.length; i++) {
        bmap.set(nums2[i],i);
    }
    for(var [key, value] of smap) {
        if(bmap.has(key)) res.push(key);
    }
    return res;
};