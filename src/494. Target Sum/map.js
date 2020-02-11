/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S, i = 0, sum = 0, map = new Map()) {
  let key = i + ',' + sum
  if (map.has(key)) return map.get(key)
  if (i === nums.length) return sum === S ? 1 : 0
  let way = findTargetSumWays(nums, S, i + 1, sum + nums[i], map) + findTargetSumWays(nums, S, i + 1, sum - nums[i], map)
  map.set(key, way)
  return way
};