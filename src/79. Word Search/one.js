/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length == 0 || word.length == 0) return
  let M = board.length
  let N = board[0].length
  for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
          if (dfs(board, i, j, word)) return true
      }
  }
  return false
};

function dfs(board, i, j, remain) {
  if (remain.length == 0) return true
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false
  if (board[i][j] !== remain[0]) return false
  
  let char = board[i][j]
  board[i][j] = '-'
  let result = (dfs(board, i+1, j, remain.substr(1))  || dfs(board, i-1, j, remain.substr(1)) || dfs(board, i, j + 1, remain.substr(1)) || dfs(board, i, j-1, remain.substr(1)))
  board[i][j] = char
  return result
}