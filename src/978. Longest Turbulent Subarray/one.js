/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  let inc = 1, dec = 1, result = 1
  for(let i = 1; i < A.length; i++) {
      if (A[i] < A[i - 1]) {
          dec = inc + 1
          inc = 1
      } else if (A[i] > A[i - 1]) {
          inc = dec + 1
          dec = 1
      } else {
          inc = 1
          dec = 1
      }
      result = Math.max(result, Math.max(dec, inc))
     
  }
  return result
};