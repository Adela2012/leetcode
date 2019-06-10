/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i == 0)  return this.nums[j];
    return this.nums[j] - this.nums[i-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */