/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Runtime: 64 ms
var subsets = function(nums) {
  let res = []
  find([], nums, 0, res)
  return res    
};

var find = (cur, remain, start, res) => {
  res.push(cur)
  
  for (let i = start; i < remain.length; i++, start++) {
      find([...cur, remain[i]], [...remain.slice(0, i), ...remain.slice(i+1)], start, res)
  }
}