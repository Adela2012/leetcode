/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let c = {}
  let res = 0
  for (let t of time) {
      t = t % 60
      let d = (60 - t % 60) % 60
      if (c[d]) {
          res += c[d]
      }
      if (c[t]) {
          c[t] = 1 + c[t]
      } else {
          c[t] = 1
      }
     
  }
  return res
};

// 84 ms	38.4 MB