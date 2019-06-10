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
      let idx = arr[1]
      if (A[idx] % 2 == 0) sum -= A[idx]
      A[idx] += arr[0]
      if (A[idx] % 2 == 0) sum += A[idx]
      res.push(sum)
  }
  return res
};

// Time: O(m + n), space: O(n), where m = A.length, n = queries.length.