/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m > n) return uniquePaths(n, m)
  
  let pre = Array(m).fill(1)
  let cur = Array(m).fill(1)
  
  for (let j = 1; j < n; j++) {
      for (let i = 1; i < m; i++) {
          cur[i] = cur[i - 1] + pre[i]
      }
      console.log(cur, pre)
      let tmp = pre
      pre = cur
      cur = tmp
  }
  return pre[m - 1]
};