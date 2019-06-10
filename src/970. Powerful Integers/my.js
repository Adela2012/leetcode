/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  let xk = Math.floor(bound / x)
  let yk = Math.floor(bound / y)
  let res = []
  for (let i = 0; i <= xk; i++) {
      for (let j = 0; j <= yk; j++) {
          let sum = Math.pow(x, i) + Math.pow(y, j)
          if (sum <= bound && !res.includes(sum)) {
              res.push(sum)
          }
          if (sum > bound) {
              break
          }
      }
  }
  return res
};

// 1180 ms	34.9 MB