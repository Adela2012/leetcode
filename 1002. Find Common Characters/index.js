/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let arr = []
  for ( let a of A ) {
      let obj = {}
      helper(obj, a)
      arr.push(obj)
  }
  
  let res = []
  for (let i of Object.keys(arr[0])) {
      let min = arr[0][i]
      for (let j = 1; j < arr.length; j++) {
          if (arr[j][i] == undefined) {
              min = 0
          } else if (min > arr[j][i]) {
              min = arr[j][i]
          }
      }
      for (let x = 1; x <= min; x++) {
          res.push(i)
      }
  }
  return res
};


var helper = function (obj, str) {
  for (let s of str) {
      if (obj[s] == undefined) {
          obj[s] = 1
      } else {
          obj[s] += 1
      }
      
  }
}