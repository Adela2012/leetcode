/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let arr = A[0].split('')
  
  for (let i = 1; i < A.length; i++) {
      let tmp = A[i].split('')
      arr = arr.filter(i => {
          let index = tmp.indexOf(i)
          return index > -1 ? ( tmp[index] = true ) : false
      })
  }
  return arr
};