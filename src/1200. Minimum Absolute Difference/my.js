/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b)

  let minDis = arr[1] - arr[0]
  let map = new Map()

  for (let i = 0; i < arr.length - 1; i++) {
    let dis = arr[i + 1] - arr[i]
    minDis = Math.min(minDis, dis)
    if (map.has(dis)) {
      map.get(dis).push([arr[i], arr[i + 1]])
    } else {
      map.set(dis, [[arr[i], arr[i + 1]]])
    }
  }

  return map.get(minDis)
};