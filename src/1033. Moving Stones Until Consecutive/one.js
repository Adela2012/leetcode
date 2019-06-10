/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  let arr = [a, b, c]
  arr.sort((a,b)=>a-b)
  if (arr[2]-arr[0] == 2) return [0, 0]
  return [Math.min(arr[2]-arr[1], arr[1]-arr[0]) <=2 ? 1 : 2, arr[2]-arr[0]-2]
};