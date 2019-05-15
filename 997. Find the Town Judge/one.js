

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let arr = Array(N+1).fill(0)
  for(let t of trust) {
      arr[t[0]]--
      arr[t[1]]++
  }
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] == N - 1) {
          return i
      }
  }
  return -1
};