/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || !board[0]) return
  let m = board.length
  let n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i == 0 || i == m - 1 || j == 0 || j == n - 1) && board[i][j] == 'O') {
        bfs(board, i, j)

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

function bfs(board, i, j) {
  let queue = [[i, j]]
  let m = board.length
  let n = board[0].length
  board[i][j] = '#'
  while (queue.length) {
    let pos = queue.shift()
    let x = pos[0]
    let y = pos[1]
    // 上
    if (x - 1 >= 0 && board[x - 1][y] == 'O') {
      queue.push([xa - 1, y])
      board[x - 1][y] = '#'
    }
    // 下
    if (x + 1 <= m - 1 && board[x + 1][y] == 'O') {
      queue.push([x + 1, y])
      board[x + 1][y] = '#'
    }
    // 左
    if (y - 1 >= 0 && board[x][y - 1] == 'O') {
      queue.push([x, y - 1])
      board[x][y - 1] = '#'
    }
    // 右
    if (y + 1 <= n - 1 && board[x][y + 1] == 'O') {
      queue.push([x, y + 1])
      board[x][y + 1] = '#'
    }
  }
};

