/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let set = new Set();
    let x;
    let sum1 = 0, sum2 = 0;
    nums.forEach((item, i) => {
        if(set.has(item)) x = item;
        else {
            set.add(item); 
            sum2 += item;
        }
        sum1 += (i + 1);
    });
    let y = sum1 - sum2;
    return [x, y];
    
};