/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)

  let arr = []

  const N = nums.length
  const max3 = nums[N - 1] + nums[N - 2] + nums[N - 3]
  const max2 = nums[N - 1] + nums[N - 2]

  for (let i = 0; i < N - 3; i++) {
    while (i > 0 && nums[i] == nums[i - 1] || nums[i] + max3 < target) i++
    if (nums[i] * 4 > target) break

    let sum3 = target - nums[i]

    for (let j = i + 1; j < N - 2; j++) {
      while (j > i + 1 && nums[j] == nums[j - 1] || nums[j] + max2 < sum3) j++
      if (nums[i] * 3 > sum3) break

      let sum2 = sum3 - nums[j]

      for (let l = j + 1, r = N - 1; l < r;) {
        if (sum2 == nums[l] + nums[r]) {
          arr.push([nums[i], nums[j], nums[l], nums[r]])
          while (nums[l] == nums[l + 1] && l < r) l++
          while (nums[r] == nums[r - 1] && l < r) r--
          l++
          r--

        } else if (sum2 > nums[l] + nums[r]) {
          while (nums[l] == nums[l + 1] && l < r) l++
          l++
        } else if (sum2 < nums[l] + nums[r]) {
          while (nums[r] == nums[r - 1] && l < r) r--
          r--
        }
      }
    }
  }

  return arr
};