/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = []
  helper(res, [], k, 1, n)
  return res
};

var helper = (res, list, k, start, n) => {
  if(list.length == k && n == 0) {
      res.push([...list])
  } else {
      for (let i = start; i <= 9; i++) {
          list.push(i)
          helper(res, list, k, i + 1, n - i)
          list.pop()
      }
  }
  
}