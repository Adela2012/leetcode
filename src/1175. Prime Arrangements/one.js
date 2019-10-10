/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  let howManyPrime = 0
  let primes = 1

  for (let i = 1; i <= n; i++) {
    howManyPrime = isPrime(i) ? ++howManyPrime : howManyPrime
  }

  for (let i = howManyPrime; i >= 1; i--) {
    primes = i * primes % (10 ** 9 + 7)
  }

  for (let i = n - howManyPrime; i >= 1; i--) {
    primes = i * primes % (10 ** 9 + 7)
  }

  return primes
};

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i == 0)
      return false
  }
  return value > 1
}