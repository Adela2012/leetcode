/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (n > m) return uniquePaths(n, m)
  let path = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        path[j] += path[j - 1]
    }
  }
  return path[n - 1]
};