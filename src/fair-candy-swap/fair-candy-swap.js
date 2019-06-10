/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sumA = A.reduce((total, next) => total += next, 0)
  let sumB = B.reduce((total, next) => total += next, 0)
  
  // sumA - a + b = sumB - b + a
  // (sumA - sumB) / 2 = a - b
  
  let set = new Set(A)
  for (let b of B) {
      let a = (sumA - sumB) / 2 + b
      if(set.has(a)) {
          return [a, b]
      }
  }
  
};