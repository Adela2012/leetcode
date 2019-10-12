/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let ans = []

  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) !== -1) {
      ans.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
    }
  }

  arr1.sort((a, b) => a - b)

  return ans.concat(arr1)
};