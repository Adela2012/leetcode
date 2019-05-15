/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let arr = ['']
  for (let i = 1; i <= N; i++) {
    arr[i] = new Set()
  }

  for (let i of trust) {
    arr[i[1]].add(i[0])
  }

  let may = -1 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].size == N - 1) {
      may = i
    }
  }
  if (may == -1) return may

  for (let i = 1; i < arr.length; i++) {
    if (i != may && arr[i].has(may)) return -1
  }
  return may
};