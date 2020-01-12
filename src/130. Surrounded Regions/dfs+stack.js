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
  let stack = [[i, j]]
  let m = board.length
  let n = board[0].length
  board[i][j] = '#'
   // continue：推出单次循环，执行下一个循环
  while (stack.length) {
    let x = stack[stack.length - 1][0]
    let y = stack[stack.length - 1][1]
    // 上
    if (x - 1 >= 0 && board[x - 1][y] == 'O') {
      stack.push([x - 1, y])
      board[x - 1][y] = '#'
      continue
    }
    // 下
    if (x + 1 <= m - 1 && board[x + 1][y] == 'O') {
      stack.push([x + 1, y])
      board[x + 1][y] = '#'
      continue
    }
    // 左
    if (y - 1 >= 0 && board[x][y - 1] == 'O') {
      stack.push([x, y - 1])
      board[x][y - 1] = '#'
      continue
    }
    // 右
    if (y + 1 <= n - 1 && board[x][y + 1] == 'O') {
      stack.push([x, y + 1])
      board[x][y + 1] = '#'
      continue
    }
    stack.pop()
  }
};

