/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b)

  let minDis
  let res = []

  for (let i = 0; i < arr.length - 1; i++) {
    let dis = arr[i + 1] - arr[i]
    if (i == 0) {
      minDis = dis
      res = [[arr[i], arr[i + 1]]]
    } else if (dis < minDis) {
      minDis = dis
      res = [[arr[i], arr[i + 1]]]
    } else if (dis === minDis) {
      res.push([arr[i], arr[i + 1]])
    }
  }

  return res

};