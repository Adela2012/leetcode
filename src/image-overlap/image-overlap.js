/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
  let LA = []
  let LB = []
  let map = new Map()
  let N = A.length
  
  for (let i = 0; i < N * N; i++) {
      let col = i % N
      let row = parseInt(i / N)
      
      if (A[row][col] == 1) {
          LA.push(row * 100 + col)
      }
      if (B[row][col] == 1) {
          LB.push(row * 100 + col)
      }
  }
  
  for (let i of LA) {
      for (let j of LB) {
          let c = i - j
          if (map.has(c)) {
              map.set(c, map.get(c) + 1)
          } else {
              map.set(c, 1)
          }
      }
  }
  
  let res = 0
  for (let i of map.values()) {
       res = Math.max(res, i)
  }
  return res
  
};