/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  let N = deck.length
  deck.sort((a, b) => a-b)
  let q = []
  for (let i = 0; i < N; i++) q.push(i)
  let res = Array(N).fill('')
  for (let i = 0; i < N; i++) {
      res[q.shift()] = deck[i]
      q.push(q.shift())
  }
  return res
};