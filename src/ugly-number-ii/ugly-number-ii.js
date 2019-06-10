/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let cache = [1]
  let p2 = 0, p3 = 0, p5 = 0
  for (let i = cache.length; i < n; i++) {
    let r2 = cache[p2] * 2
    let r3 = cache[p3] * 3
    let r5 = cache[p5] * 5
    let m = Math.min(r2, r3, r5)
    if (m == r2) p2++
    if (m == r3) p3++
    if (m == r5) p5++
    cache[i] = m
  }
  return cache[n - 1]
};