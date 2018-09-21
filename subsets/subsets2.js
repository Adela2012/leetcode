/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Runtime: 60 ms
var subsets = function(nums) {
  let res = [[]]
  nums.forEach(z => {
      let len = res.length
      for(let i = 0; i < len; i++) {
          res.push([...res[i], z])
      }
  })
  return res
};