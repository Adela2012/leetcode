/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  let arr = []
  for (let m = 1; m <= bound; m *= x) {
      for (let n = 1; n + m <= bound; n *= y) {
          if (!arr.includes(n+m)) arr.push(m+n)
          if (y == 1) break
      }
      if (x == 1) break
  }
  return arr
};

// 76 ms	33.8 MB