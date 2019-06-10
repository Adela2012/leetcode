/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort()
  let res = []
  find(nums, res, 0, [])
  return res
};

var find = (nums, res, start, tmp) => {
  res.push(tmp.slice())
  for(let i = start; i < nums.length; i++) {
      if(i > start && nums[i] === nums[i - 1]) continue
      tmp.push(nums[i])
      find(nums, res, i + 1, tmp)
      tmp.pop()
  }
}