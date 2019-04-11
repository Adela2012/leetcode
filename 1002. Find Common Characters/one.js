/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let arr = Array(26).fill(Number.MAX_VALUE)
  
  for (let str of A) {
      let tmp = Array(26).fill(0)
      for (let s of str) tmp[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
      for (let i = 0; i < 26; i++) arr[i] = Math.min(arr[i], tmp[i])
  }
  
  let res = []
  for (let i = 0; i < arr.length; i++) {
      while (arr[i] > 0) {
          res.push(String.fromCharCode('a'.charCodeAt(0) + i))
          arr[i] -= 1
      }
  }
  return res
};

// 72 ms	36.6 MB