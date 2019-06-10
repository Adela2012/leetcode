/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  var map = new Map()
  var first = 0
  var res
  var r
  paragraph.replace(/[^a-zA-Z\s]/g, '').toLowerCase().split(' ').forEach(value => {
    if (banned.indexOf(value) == -1) {
      if (map.has(value)) {
        map.set(value, map.get(value) + 1)
        if (map.get(value) > first) {
          first = map.get(value)
          res = value
        }
      } else {
        map.set(value, 1)
        r = value
      }
    }
  })
  return res ? res : r
};