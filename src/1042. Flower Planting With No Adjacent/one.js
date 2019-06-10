/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
  let map = {}
  for(let i = 0; i < N; i++) { map[i] = new Set()}
  
  for (let p of paths) {
      map[p[0] - 1].add(p[1] - 1)
      map[p[1] - 1].add(p[0] - 1)
  }
  
  let res = new Array(N).fill(0)
  for (let i = 0; i < N; i++) {
      let colors = new Array(5).fill(0)
      
      for (let j of map[i]) {
          colors[res[j]] = 1
      }
      
      for (let c = 4; c > 0; --c) {
          if (colors[c] == 0) {
              res[i] = c
          }
      }
   }
  return res
  
};