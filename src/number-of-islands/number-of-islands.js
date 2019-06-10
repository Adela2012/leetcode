/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0
    let num = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                Helper(grid, i, j);
                num++;
            }
        }
    }
    return num
};

var Helper = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != 1) return
    grid[i][j] = 0;
    Helper(grid, i + 1, j);
    Helper(grid, i - 1, j);
    Helper(grid, i, j + 1);
    Helper(grid, i, j - 1);
}