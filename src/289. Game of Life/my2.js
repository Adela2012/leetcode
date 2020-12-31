/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var gameOfLife = function (board) {
    let arr = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (A(board, i, j)) {
                arr.push([i, j])
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