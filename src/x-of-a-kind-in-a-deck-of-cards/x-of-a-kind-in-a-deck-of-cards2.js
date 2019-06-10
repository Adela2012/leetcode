/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = {}
    for (let i of deck) {
        map[i] = (map[i] || 0) + 1
    }
    
    let min = Object.values(map)[0]
    for (let v of Object.values(map)) {
        min = gcd(min, v)
    }
    return min >= 2
};

var gcd = (a, b) => {
    return b == 0 ? a : gcd(b, a%b)
}