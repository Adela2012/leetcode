/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let i = 0
  
  s.forEach(item => {
      if(item >= g[i]) {
          i++
      }
  })
  return i
};