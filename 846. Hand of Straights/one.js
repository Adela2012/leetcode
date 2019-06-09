/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  let count = new Map()
  for (let card of hand) { 
      count.set(card, (count.get(card) || 0) + 1)
  }
 
  while (count.size > 0) {
      let first = [...count.keys()].sort((a, b)=> a-b)[0]
      for (let card = first; card < first + W; card++) {
          if (!count.has(card)) return false
          let c = count.get(card)
          c == 1 ? count.delete(card) : count.set(card, c - 1)
      }
  }
  return true
};