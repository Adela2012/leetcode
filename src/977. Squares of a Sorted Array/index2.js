/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let arr = []
  for (let i of A) {
      let s = i * i
      if (arr.length == 0) {
          arr.push(s)
      } else if (s <= arr[0]) {
          arr.unshift(s)
      } else if (s >= arr[arr.length - 1]) {
          arr.push(s)
      }
      else {
          for (let j = 0; j < arr.length; j++) {
             if (s > arr[j] && s <= arr[j+1]) {
                 arr.splice(j+1, 0, s)
             }
          }
      }
  }
  return arr
};

// 1020 ms	42.2 MB	