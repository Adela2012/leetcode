/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0, j = 0
  for (; i < name.length && j < typed.length;) {
    if (name.charAt(i) == typed.charAt(j)) {
      i++ , j++
    } else if ((j + 1 < typed.length && typed.charAt(j) == typed.charAt(j + 1)) || (j - 1 >= 0 && typed.charAt(j) == typed.charAt(j - 1))) {
      j++
    } else {
      return false
    }
  }
  return i == name.length
};

// 60 ms	35.1 MB