/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let res = -1
  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          if (i != j) {
              for (let k = 0; k < 4; k++) {
                  if (i != k && j != k) {
                      let l = 6 - i - j - k
                      let hour = A[i] * 10 + A[j]
                      let minite = A[k] * 10 + A[l]
                      if (hour < 24 && minite < 60) {
                          res = Math.max(hour * 60 + minite, res)
                      }
                  }
              }
          }
      }
  }
  return res >= 0 ? format(Math.floor(res / 60)) + ':' + format(res % 60) : ''
};

var format = function (num) {
  return num < 10 ? '0' + num : num
}