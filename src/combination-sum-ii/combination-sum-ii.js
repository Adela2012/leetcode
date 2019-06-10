/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let nums = candidates.sort((a,b) => a-b)
  let res = []
  helper(res, [], 0, target, nums)
  return res
};

var helper = (res, list, index, target, nums) => {
  if(target < 0) return
  else if(target == 0) {
      res.push([...list])
  } else {
      for (let i = index; i < nums.length; i++) {
          if (i > index && nums[i - 1] == nums[i]) continue
          list.push(nums[i])
          helper(res, list, i + 1, target - nums[i], nums)
          list.pop()
      }
  }
};