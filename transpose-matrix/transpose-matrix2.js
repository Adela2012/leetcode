/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  return A[0].map((row, i) => A.map(col => col[i]))
};