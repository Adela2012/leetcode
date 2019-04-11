/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let pre = 0
  let res = []
  for (let i = 0; i < A.length; i++) {
      pre = (pre * 2 + A[i]) % 5
      res.push(pre === 0)
  }
  return res
};

// 76 ms	38.2 MB