/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    return A.sort((a, b) => {
       return a % 2 - b % 2
    })
};

