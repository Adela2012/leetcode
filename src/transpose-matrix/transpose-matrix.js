/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  let res = []
  for (let i = 0; i < A[0].length; i++) {
    let cur = []
    for (let j = 0; j < A.length; j++) {
      cur.push(A[j][i])
    }
    res.push(cur)
  }
  return res
};