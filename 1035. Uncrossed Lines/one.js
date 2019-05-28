/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
  let N = A.length, M = B.length
  let dp = Array(N + 1).fill('')
  for (let i in dp) dp[i] = Array(M + 1).fill(0)

  for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
          if (A[i-1] == B[j-1]) {
              dp[i][j] = 1 + dp[i-1][j-1]
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }
      }
  }
  
  return dp[N][M]
  
};

// Time O(N^2), Space O(N^2)