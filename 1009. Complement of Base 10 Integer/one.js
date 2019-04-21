/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let x = 1
  while (x < N) {
      x = x * 2 + 1
  }
  
  return x - N
};

// O(logN) Time
// O(1) Space