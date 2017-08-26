/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var sum = nums.length * nums[0].length;
    if(sum != r*c || (nums.length == r && nums[0].length == c)) return nums;
    var arr = []; var cur = [];
    for(var i = 0; i < nums.length; i++) {
        for(var j = 0; j < nums[i].length; j++) {
            cur.push(nums[i][j]);
            if( (i * nums[0].length + j + 1) % c == 0 ) {
                arr.push(cur);
                cur = [];
            }
        }
    }
    return arr;
};