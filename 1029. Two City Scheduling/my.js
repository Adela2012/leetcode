/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let res = 0
  let a = 0, b = 0, c = 0
  let da = [], db = []
  for (let p of costs) {
      if (p[0] < p[1]) {
          res += p[0]
          da.push(p[1] - p[0])
          a++
      } else if (p[0] > p[1]) {
          res += p[1]
          db.push(p[0] - p[1])
          b++
      } else {
          res += p[0] 
          c++
      }
  }
  if (Math.abs(a - b) <= c) return res
  let n = (Math.abs(a - b) - c) / 2
  
  da.sort((a, b) => a - b)
  db.sort((a, b) => a - b)

  if (a > b) {
      for (let i = 0; i < n; i++) {
          res += da[i]
      }
  }
  if (a < b) {
      for (let i = 0; i < n; i++) {
          res += db[i]
      }
  }

  return res
};