/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  return N % 2 == 0
};

// if Alice will lose for N, then Alice will must win for N+1, since Alice can first just make N decrease 1.
// for any odd number N, it only has odd factor, so after the first move, it will be an even number