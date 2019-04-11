/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let sum = A.reduce((sum, cur) => sum+cur)
  console.log(sum)
  if (sum % 3 != 0) return false
  let part = 0
  let count = 0
  for (let i of A) {
      part += i
      if (part != sum / 3) continue
      if (++count == 3) return true
      part = 0
  }
  return false
};

// 76 ms	40.3 MB