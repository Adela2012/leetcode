/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let x, y
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] == 'R') {
              x = i
              y = j
              break
          }
      }
  }
  
  let sum = 0
  
  for (let i = x - 1; i >= 0; i--) {
      if (board[i][y] == 'B') {
          break
      } else if (board[i][y] == 'p') {
          sum += 1
          break
      }
  }
  
  for (let i = x + 1; i < board.length; i++) {
      if (board[i][y] == 'B') {
          break
      } else if (board[i][y] == 'p') {
          sum += 1
          break
      }
  }
  
  for (let j = y - 1; j >= 0; j--) {
      if (board[x][j] == 'B') {
          break
      } else if (board[x][j] == 'p') {
          sum += 1
          break
      }
  }
  
  for (let j = y + 1; j < board[0].length; j++) {
      if (board[x][j] == 'B') {
          break
      } else if (board[x][j] == 'p') {
          sum += 1
          break
      }
  }
  
  return sum
};