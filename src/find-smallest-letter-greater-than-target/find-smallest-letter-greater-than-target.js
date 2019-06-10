/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let left = 0
  let right = letters.length - 1
  if(target >= letters[right] || target < letters[0]) return letters[0]
  while(left < right) {
      let mid = left + parseInt((right - left) / 2)
      if(target < letters[mid] ) {
          right = mid
      } else {
          left = mid + 1
      }
  }
  return letters[left]
};