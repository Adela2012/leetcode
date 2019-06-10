/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if(timeSeries.length == 0) return 0
  let res = 0
  let cur = 0
  let prev = 0
  for (let i = 0; i < timeSeries.length - 1; i++) {
      cur = timeSeries[i+1] - timeSeries[i]
      res += duration
      if (prev) {
          res -= prev
      }
      cur < duration ? prev = duration - cur : prev = 0
  }
  return prev == 0 ? res + duration : res + duration - prev
};