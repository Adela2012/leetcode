/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
    stones.sort((a,b) => a-b)
    let n = stones.length
    let low = n
    let i = 0
    let high = Math.max(stones[n-1] - stones[1] - n + 2, stones[n - 2] - stones[0] - n + 2)
    for (let j = 0; j < n; j++) {
        while (stones[j] - stones[i] >= n) i++
        if (stones[j] - stones[i] == n - 2 && j - i == n - 2) {
            low = Math.min(2, low)
        } else {
            low = Math.min(low, n - (j - i + 1))
        }
    }
    return [low, high]
};