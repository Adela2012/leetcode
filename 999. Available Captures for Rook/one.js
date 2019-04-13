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
  let direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  for (let d of direction) {
      for (let i = x + d[0], j = y + d[1]; i >= 0 && i < board.length && j >= 0 && j < board[0].length; i += d[0], j += d[1]) {
          if (board[i][j] == 'p') {
              sum += 1
              break
          }
          if (board[i][j] == 'B') {
              break
          }
      }
  }
 
  
  return sum
};

// 52 ms	34 MB