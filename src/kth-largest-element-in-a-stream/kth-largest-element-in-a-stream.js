/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.nums = nums.sort((a, b) => b - a)
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  let l = this.nums.length
  if(l == 0) {
      this.nums.push(val)
  }
 
 for(let i = 0; i < l; i++) {
      if(val > this.nums[i]) {
          this.nums.splice(i, 0, val)
          break
      } 
     if(i === l - 1) {
         this.nums.push(val)
     }
  } 
  return this.nums[this.k - 1];
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = Object.create(KthLargest).createNew(k, nums)
* var param_1 = obj.add(val)
*/