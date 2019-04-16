/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]

var shortestCompletingWord = function(licensePlate, words) {
    let lp = helper(licensePlate.toLowerCase().replace(/[^a-z]/g,''))
    let min = 'aaaaaaaaaaaaaaa'
    for (let word of words) {
        if (word.length < min.length && helper(word) % lp == 0) 
            min = word
    }
    
    return min
};

var helper = function (str) {
    let pd = 1
    for (let c of str) {
        let index = c.charCodeAt() - 'a'.charCodeAt()
        pd *= primes[index]
    }
    return pd
}