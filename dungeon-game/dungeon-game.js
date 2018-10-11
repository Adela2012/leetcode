/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let m = dungeon.length
  let n = dungeon[0].length
  
  let dp = dungeon

  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          if (i == m - 1 && j == n - 1) {
              dp[i][j] = Math.max(1, 1 - dp[i][j])
          }
          if (i == m - 1 && j < n - 1) {
              dp[i][j] = Math.max(1, dp[i][j + 1] - dp[i][j])
          }
          if (j == n - 1 && i < m - 1) {
              dp[i][j] = Math.max(1, dp[i + 1][j] - dp[i][j])
          }
          if (i < m - 1 && j < n - 1) {
              dp[i][j] = Math.max(1, Math.min(dp[i+1][j], dp[i][j+1]) - dp[i][j])
          }
      }
  }
  console.log(dp)
  return dp[0][0]
};