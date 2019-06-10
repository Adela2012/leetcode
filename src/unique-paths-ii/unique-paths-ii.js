/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let w = obstacleGrid[0].length
  let dp = Array(w).fill(0)
  dp[0] = 1
  for (let row of obstacleGrid) {
      for (let i = 0; i < w; i++) {
          if ( row[i] == 1 ) {
              dp[i] = 0
          } else if (i > 0) {
              dp[i] += dp[i - 1]
          }
      }
  }
  return dp[w - 1]
};