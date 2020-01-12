# 130. Surrounded Regions
Medium

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

### 130.被围绕的区域

给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X
运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X
解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

---
这题是图的遍历，可以使用`深度优先遍历dsf`和`广度优先遍历bfs`。
首先对于每个元素进行遍历，找到边界为'O'的元素和与之相邻的'O'元素，标记为’#‘。
第二次遍历的时候，将为’O‘的元素替换成‘X’，将‘#’替换成‘O’。

- dsf+recursion: 使用递归方式进行深度优先遍历
- dsf+stack: 使用栈进行深度优先遍历
- bsf+resursion: 使用递归方式进行广度优先遍历（此题不作涉及）
- bsf+queue: 使用队列进行广度优先遍历

### dsf+recursion
```javascript
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

```






### dsf+stack
我们使用数组来模拟一个栈，记录每一次遍历过的位置。栈有一个特点，那就是先进后出。我们将符合条件的元素位置pos推入栈，并将该元素标记为‘#’。当这个栈不为空的时，获取最新推入的元素位置pos，对于该元素的上下左右为‘O’的元素，标记为‘#’，并推入栈。直到元素上下左右都没有‘O’的时候，将该元素位置推出。
```javascript
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
    let pos = stack[stack.length - 1]
    let x = pos[0]
    let y = pos[1]
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

```



###  bsf+queue
我们使用数组模拟队列，队列有先进先出的特点。dsf+stack的区别就是，dsf搜上下左右，只要有一个满足条件，将元素入栈，并顺着该方向继续搜索，使用`continue`跳出此次循环，进入下一次，知道上下左右都不满足，才将该元素出栈，先进后出。而bsf使用队列，先进先出，bsf搜的该元素上下左右，满足条件的都入队列，并将该元素出队列。
```javascript
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


```

###  bsf+resursion
此题不去涉及。

### 【资料】
- [LeetCode](https://leetcode.com/problems/surrounded-regions/)
- [力扣](https://leetcode-cn.com/problems/surrounded-regions)
- [bfs+递归dfs+非递归dfs+并查集](https://leetcode-cn.com/problems/surrounded-regions/solution/bfsdi-gui-dfsfei-di-gui-dfsbing-cha-ji-by-ac_pipe/)
