/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  while(true) {
      let sum = a^b
      let carry = (a&b) << 1
      if(b == 0) return a
      a = sum
      b = carry
  }
};
