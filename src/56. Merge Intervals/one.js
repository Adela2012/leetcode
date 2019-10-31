/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length == 0) return []
  intervals.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1])
  let prev = intervals[0]
  let res = [prev]
  for (let cur of intervals) {
    if (cur[0] <= prev[1]) {
      prev[1] = Math.max(cur[1], prev[1])
    } else {
      res.push(cur)
      prev = cur
    }
  }

  return res
};
