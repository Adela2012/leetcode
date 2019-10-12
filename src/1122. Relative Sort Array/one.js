/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let h = {}
  for (let i = 0; i < arr2.length; i++) h[arr2[i]] = i

  for (const i of arr1) {
    if (!(i in h)) h[i] = 1000 + i
  }

  arr1.sort((a, b) => h[a] - h[b])
  return arr1
};