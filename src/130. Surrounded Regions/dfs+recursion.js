/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board || !board[0]) return
  let m = board.length
  let n = board[0].length
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if ((i == 0 || i == m - 1 || j == 0 || j == n - 1) && board[i][j] == 'O'){
              dfs(board, i, j)
              
          }
      }
  }
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] == 'O') board[i][j] = 'X'
          if (board[i][j] == '#') board[i][j] = 'O'
          
      }
  }
};

function dfs(board, i, j) {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1 || board[i][j] == '#' || board[i][j] == 'X') return
    board[i][j] = '#'
    dfs(board, i - 1, j)
    dfs(board, i + 1, j)
    dfs(board, i, j - 1)
    dfs(board, i, j + 1)
} 

