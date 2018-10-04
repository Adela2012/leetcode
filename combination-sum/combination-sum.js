/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  helper(res, [], candidates, 0, target)
  return res
};

var helper = (res, list, candidates, index, target) => {
  if(target < 0) return
  else if (target == 0) {
      res.push([...list])
  } else {
      for(let i = index; i < candidates.length; i++) {
          list.push(candidates[i])
          helper(res, list, candidates, i, target-candidates[i])
          list.pop()
      } 
  }
};