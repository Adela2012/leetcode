/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let F = 0;
    let T = 0;
    for(let num of nums) {
        let temp = F;
        F = Math.max(F, T);
        T = temp + num;
    }
    return Math.max(F, T);
};