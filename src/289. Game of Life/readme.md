289. Game of Life
Medium

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?


## 289. 生命游戏
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

 

示例：
```
输入： 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
输出：
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
```

进阶：

你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？

## 解题
首先以下几个点需要注意：
1. 不返回一个新的数组，而是在原来的数组里进行更改。
2. 判断当前细胞是否存活时，判断条件是初始的数组值，而不是更改后的数组值。
3. 需要判断数组边界问题
4. 判断条件为：活细胞的周边为活细胞数量为2-3能活，死细胞的周边为活细胞数量为3能活
  

在做的过程中，首先是将跟原来的值不同的坐标标记，然后一轮循环结束以后，再进行一次循环依次将标记的值进行更新。然后数组边界问题，就是将每次判断时，需要过滤超出边界的坐标。

```js
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var gameOfLife = function (board) {
    let arr = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (A(board, i, j)) {
                arr.push([i, j]) // 将跟原来的值不同的坐标标记
            }
        }
    }

    for (let a of arr) {
        let [x, y] = a
        board[x][y] = board[x][y] == 0 ? 1 : 0
    }
};
function A(board, i, j) {
    let sum = 0 - board[i][j], X = board.length, Y = board[0].length
    let D = [-1, 0, 1]
    for (let n of D) {
        let x = i + n
        for (let m of D) {
            let y = j + m
            if (x >= 0 && x < X && y >= 0 && y < Y) {
                sum += board[x][y]
            }
        }
    }
    if (board[i][j] == 1) {
        if (sum == 2 || sum == 3) return false
        else return true
    }
    if (board[i][j] == 0) {
        if (sum == 3) return true
        else return false
    }
}   
```
**复杂度分析**
- 时间复杂度：O(mn)，其中 m 和 n 分别为 board 的行数和列数。
- 空间复杂度：O(s)，s为标记改变的数组值占用的空间，最大值为mn。
  
还可以是，复制一份原始数组，根据复制数组中邻居细胞的状态来更新 board 中的细胞状态。
```js
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
```
**复杂度分析**
- 时间复杂度：O(mn)，其中 m 和 n 分别为 board 的行数和列数。
- 空间复杂度：O(mn)，为复制数组占用的空间。


上述过程中做法略显繁琐，因为还添加了一个额外的数组，或用来复制数组，或用来标记修改的坐标标记。优化方式是，
1. 可以在原来的值上进行修改。就是判断存活的条件时，需要根据值来进行不同的判断。
```js
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let N = board.length, M = board[0].length
  let dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let count = 0
      for (let k of dir) {
        let x = i + k[0], y = j + k[1]
        if (x >= 0 && x < N && y >= 0 && y < M && Math.abs(board[x][y]) == 1) {
          count++
        }
      }
      if (board[i][j] == 0 && count == 3) {
        board[i][j] = 2 // 2 signifies the cell is now live but was originally dead.
      }

      if (board[i][j] == 1 && (count < 2 || count > 3)) {
        board[i][j] = -1 // -1 signifies the cell is now dead but originally was live.
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      board[i][j] = board[i][j] > 0 ? 1 : 0
    }
  }
};
```

**复杂度分析**
- 时间复杂度：O(mn)，其中 mm，nn 分别为 board 的行数和列数。
- 空间复杂度：O(1)，除原数组外只需要常数的空间存放若干变量。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/game-of-life/)
