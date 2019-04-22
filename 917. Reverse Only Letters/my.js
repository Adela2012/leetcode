/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
   
  let arr = S.split('')
  for ( let l = 0, r = arr.length - 1; l < r; ) {
     if (!/[a-zA-Z]/.test(arr[l])) {
         l++
         continue
      } 
      if (!/[a-zA-Z]/.test(arr[r])) {
         r--
         continue
      }
      let tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp
      l++, r--
  }
  return arr.join('')
};