/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                res = Math.max(res, numOfIsland(grid, i, j))
            }
        }
    }
    return res
};

var numOfIsland = function (grid, i, j) {
    if (i >= 0 && j >= 0 && i < grid.length && j < grid[0].length && grid[i][j] === 1) {
        grid[i][j] = 0
        return 1 + numOfIsland(grid, i - 1, j) + numOfIsland(grid, i + 1, j) + numOfIsland(grid, i, j - 1) + numOfIsland(grid, i, j + 1)
    } else
        return 0
}