/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let arr = Array(26).fill(0)
  for (let task of tasks) {
      arr[task.codePointAt(0) - 'A'.codePointAt(0)]++
  }
  
  arr = arr.sort((a, b) => a-b)
  let i = 25
  while (i >= 0 && arr[i] == arr[25]) {
      i--
  }
  return Math.max(tasks.length, (n + 1) * (arr[25] - 1) + 25 - i)
};