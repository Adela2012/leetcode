/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let arr = [];
    for(let n of ops) {
        if(n == 'C') arr.pop();
        else if(n == 'D') arr.push(parseInt(arr[arr.length-1]) * 2);
        else if(n == '+') arr.push(parseInt(arr[arr.length-1])  + parseInt(arr[arr.length-2]));
        else arr.push(parseInt(n));
    }
    
    let sum = 0;
    for(let m of arr)  sum+= m; 
    return sum;
};