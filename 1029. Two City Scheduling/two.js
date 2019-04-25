/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let N = costs.length / 2
  console.log(N)
  let dp = Array(N + 1).fill(0)
  for (let i in dp) {
      dp[i] = Array(N + 1).fill(0)
  }
  
  for (let i = 1; i <= N; i++) {
      dp[i][0] = dp[i - 1][0] + costs[i - 1][0]
  }
  
  for (let j = 1; j <= N; j++) {
      dp[0][j] = dp[0][j - 1] + costs[j - 1][1]
  }
  
  for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
          dp[i][j] = Math.min(dp[i - 1][j] + costs[i + j - 1][0], dp[i][j - 1] + costs[i + j - 1][1])
      }
  }
  
  return dp[N][N]
};