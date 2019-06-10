/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let maxOfLeft = []
  let minOfRight = []
  let N = arr.length
  
  maxOfLeft[0] = arr[0]
  for (let i = 1; i < N; i++) {
      maxOfLeft[i] = Math.max(maxOfLeft[i - 1], arr[i])
  }
  
  minOfRight[N - 1] = arr[N - 1]
  for (let i = N - 2; i >= 0; i--) {
      minOfRight[i] = Math.min(minOfRight[i + 1], arr[i])
  }
  
  let res = 0
  for (let i = 0; i < N - 1; i++) {
      if (maxOfLeft[i] <= minOfRight[i+1]) res++
  }
  
  return res + 1
};