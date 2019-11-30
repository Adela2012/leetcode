/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  let count = Array(121).fill(0)
  for (let age of ages) count[age]++
  
  let ans = 0
  for (let i = 0; i <= 120; i++) {
      let countA = count[i]
      for (let j = 0; j <= 120; j++) {
          let countB = count[j]
          
          if (i * 0.5 + 7 >= j) continue
          if (i < j) continue
          if (i < 100 && 100 < j) continue
          ans += countA * countB
          if (i == j) ans -= countA
      }
  }
  return ans
};