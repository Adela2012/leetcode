/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var c = 0;
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                if (i - 1 >= 0 && grid[i-1][j] == 1 ) ;
                else c+=1;
                if (i + 1 < grid.length && grid[i+1][j] == 1) ;
                else c+=1;
                if (j - 1 >= 0 && grid[i][j-1] == 1) ;
                else c+=1;
                if(j + 1 < grid[0].length && grid[i][j+1] == 1) ;
                else c+=1;
            }
        }
    }
    return c;
};