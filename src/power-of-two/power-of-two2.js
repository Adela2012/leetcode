/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if(n <= 0) return false
  // Power of 2 means only one bit of n is '1', so use the trick n&(n-1)==0 to judge whether that is the case
  return (n & (n - 1)) == 0
};