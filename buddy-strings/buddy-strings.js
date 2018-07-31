/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length != B.length) return false
  if (A === B) {
    return A.length > new Set(A).size
  }
  var arr = []
  for (let i = 0; i < A.length; i++) {
    if (A.charAt(i) != B.charAt(i)) {
      arr.push(i)
    }
  }
  if (arr.length == 2 && A.charAt(arr[0]) == B.charAt(arr[1]) && A.charAt(arr[1]) == B.charAt(arr[0])) return true
  return false
};