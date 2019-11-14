/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {


  let N = board.length, M = board[0].length
  let dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

  let res = []
  for (let i = 0; i < N; i++) {
    let arr = []
    for (let j = 0; j < M; j++) {
      arr.push(board[i][j])
    }
    res.push(arr)
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let count = 0
      for (let k of dir) {
        let x = i + k[0], y = j + k[1]
        if (x >= 0 && x < N && y >= 0 && y < M) {
          count += res[x][y]
        }
      }
      
      if (res[i][j] == 0 && count == 3) {
        board[i][j] = 1
      }

      if (res[i][j] == 1 && (count < 2 || count > 3)) {
        board[i][j] = 0
      }
    }
  }
};