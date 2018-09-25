/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let count = 0
    for (let i = L; i <= R; i++) {
        if(helper(i)) count++
    }
    return count
};

var helper = (num) => {
    let l = num.toString(2).split('0').join('').length
    return isPrime(l)
};

var isPrime = (num) => {
    if(num <= 1) return false
    let c = Math.floor(Math.sqrt(num))
    for(let i = 2; i <= c; i++) {
        if(num % i == 0) return false
    }
    return true
};