/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let res = []
  let sum = 0
  for (let i of A) {
      if (i % 2 == 0) {
          sum += i
      }
  }
  for (let arr of queries) {
      let tmp = A[arr[1]]
      A[arr[1]] += arr[0] 
      if (A[arr[1]] % 2 == 0 && tmp % 2 == 0) {
          sum += arr[0]
      }  else if (A[arr[1]] % 2 == 0 && tmp % 2 != 0) {
          sum += A[arr[1]]
      } else if (A[arr[1]] % 2 != 0 && tmp % 2 == 0) {
          sum -= tmp
      }
      res.push(sum)
  }
  return res
};

// 128 ms	47.9 MB