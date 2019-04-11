/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N < 2) return N
  let i = 0, j = 1
  while (N >= 2) {
      let s = i + j
      i = j
      j = s
      N--
  }
  return j
};

// 56 ms	33.8 MB