/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let res = []
  for (let arr of queries) {
      A[arr[1]] += arr[0]
      res.push(helper(A))
  }
  return res
};

var  helper = function (arr) {
  let sum = 0;
  for (let i of arr) {
      if (i % 2 == 0) {
          sum += i
      }
  }
  return sum
}

// 8812 ms	47.5 MB