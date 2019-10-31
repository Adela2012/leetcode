/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1])
  let i = 0
  while (intervals.length - 1 > i) {
    if (intervals.length == 1) break
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1])
      intervals.splice(i + 1, 1)
    } else {
      i++
    }
  }
  return intervals
};
