/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let arr = []
  for (let i of A) {
      let s = i * i
      arr.push(s)
  }
  return arr.sort((a,b)=>a-b)
};

// 152 ms	43.4 MB