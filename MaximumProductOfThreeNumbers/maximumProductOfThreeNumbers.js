/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var n1 = null, n2 = null, n3 = null, m1 = null, m2 = null;
    for(var i = 0; i < nums.length; i++) {
        if(n1 == null || nums[i] > n1) {
            n3 = n2;
            n2 = n1;
            n1 = nums[i];            
        } else if(n2 == null || nums[i] > n2) {
            n3 = n2;
            n2 = nums[i];
        } else if(n3 == null || nums[i] > n3) {
            n3 = nums[i];
        }
        
        if(m1 == null || nums[i] < m1) {
            m2 = m1;
            m1 = nums[i];
        } else if(m2 == null || nums[i] < m2) {
            m2 = nums[i];
        }
    }
    return Math.max(n1*n2*n3,n1*m1*m2);
};