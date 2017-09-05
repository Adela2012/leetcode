/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var slow, fast;
    slow = fast = n; 
    do {
        slow = helper(slow);
        fast = helper(fast);
        fast = helper(fast);        
    } while (slow != fast);
    if(slow == 1) return true;
    else return false;
};
var helper = function(n) {
    var sum = 0; var cur = 0;
    while(n > 0) {
        cur = n % 10
        n = parseInt(n / 10);        
        sum += Math.pow(cur, 2);
    }
    return sum;
}