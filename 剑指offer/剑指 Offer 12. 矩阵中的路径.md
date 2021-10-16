# 剑指 Offer 12. 矩阵中的路径
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

<img style="width: 322px; height: 242px;" src="https://assets.leetcode.com/uploads/2020/11/04/word2.jpg" alt="">

 

示例 1：
```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```
示例 2：
```
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
 ```

提示：
```
1 <= board.length <= 200
1 <= board[i].length <= 200
board 和 word 仅由大小写英文字母组成
``` 


# 解题
1. 不确定从二维字符网格board中的哪个单元格可以匹配上word首字母，开始进行深度优先搜索。
2. 因此第一步需要遍历board，并判断dfs返回的值
   1. 深度优先搜索dfs，入参判断有没有超出board边界，是否与word字母不同，`if (x < 0 || y < 0 || x >= N || y >= M || board[x][y] !== word[w]) return false`
   2. 如果已经搜索到word的最后一个字母了，返回true，`if (w == word.length - 1) return true`
   3. 已经搜索过的单元格置为null，`board[x][y] = null`
   4. 上下左右搜索，`[[1, 0], [-1, 0], [0, 1],  [0, -1]].some(([i, j]) => dfs(x+i, y+j, w+1))`
   5. 回退的时候将单元格还原为原来数字
   6. 返回搜索结果
```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const N = board.length, M = board[0].length
    for(let i = 0; i < N; i++) {
        for (let j = 0;j < M; j++) {
           if(dfs(i, j, 0)) return true
        }
    }
    return false

    function dfs(x, y, w) {
        if (x < 0 || y < 0 || x >= N || y >= M || board[x][y] !== word[w]) return false
        if (w == word.length - 1) return true
        board[x][y] = null
        const dr = [[1, 0], [-1, 0], [0, 1],  [0, -1]]
        res = dr.some(([i, j]) => dfs(x+i, y+j, w+1))
        board[x][y] = word[w]
        return res
    }
};
```

- 时间复杂度 O(MN3^w) 
- 空间复杂度 O(w)