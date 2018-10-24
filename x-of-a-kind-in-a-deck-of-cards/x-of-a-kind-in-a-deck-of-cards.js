/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let map = {}
  for (let i of deck) {
    map[i] = (map[i] || 0) + 1
  }
  let arr = Object.values(map)
  let min = deck.length
  arr.forEach(value => {
    min = Math.min(min, value)
  })
  for (let i = 2; i <= min; i++) {
    if (min % i == 0) {
      let flag = true
      for (let v of arr) {
        if (v % i != 0) flag = false
      }
      if (flag) return true
    }
  }
  return false
};