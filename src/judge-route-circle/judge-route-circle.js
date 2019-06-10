/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var s = 0; var b = 0;
    for(let move of moves) {
        switch (move) {
            case 'U': 
                s += 1;
                break;
            case 'D': 
                s -= 1;
                break;
            case 'L':
                b += 1;
                break;
            case 'R':
                b -= 1;
                break;
        }
    }
    return s == 0 && b == 0;
};